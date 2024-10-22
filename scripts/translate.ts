/**
 *  翻译多语言
 *  注意：网络有问题，配置代理也不行(https-proxy-agent 和 export HTTPS_PROXY=http://127.0.0.1:7897 都不好使 )
 * 
 *  使用方法：
 *  1、在 en.json 补充新游戏配置，比如 { game1: {...}, gameName1: {} }
 *  2、执行 yarn trans gameName1
 */

const fs = require("fs-extra");
const path = require("path");
const OpenAI = require("openai");
const { HttpsProxyAgent } = require("https-proxy-agent");

// 配置代理
const proxyUrl = "http://127.0.0.1:7897"; // 替换为你的代理地址
const agent = new HttpsProxyAgent(proxyUrl);

const localeDir = path.resolve(__dirname, "../messages");

// OpenAI API Key
const OPENAI_API_KEY = "";

// 初始化 OpenAI SDK
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  fetch: (url: string, options: any) => {
    options.agent = agent; // 添加代理到请求
    return fetch(url, options);
  },
});

// 支持的语言列表
const languages = ["cn"] as const;
// const languages = ['cn', 'de', 'es', 'fr', 'jp', 'pt', 'ru', 'tw'] as const;
type Language = (typeof languages)[number];

// 读取 JSON 文件
async function readJsonFile(filePath: string) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    throw error;
  }
}

// 写入 JSON 文件
async function writeJsonFile(filePath: string, data: any) {
  try {
    await fs.writeJson(filePath, data, { spaces: 2 });
  } catch (error) {
    console.error(`Error writing to file: ${filePath}`, error);
    throw error;
  }
}

// 使用 OpenAI 翻译
async function translateContent(
  text: string,
  targetLang: Language
): Promise<object | undefined> {
  const maxRetries = 3; // 最大重试次数
  console.log("Begin Translate....");
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // 可以选择 'gpt-3.5-turbo' 或 'gpt-4'
        messages: [
          {
            role: "system",
            //   content: `You are a translator. Please translate the following text to ${targetLang}.`,
            //   content: `Translate the following data into the '${targetLang}' language. The data structure must remain unchanged, and only the values need to be translated. The terms 'Funny Shooter' and 'Space Waves' should not be translated.`,
            content: `Translate the following data into ${targetLang}. The data structure should remain unchanged. Only translate the values, and do not translate brand names or game names.`,
          },
          {
            role: "user",
            content: text,
          },
        ],
      });

      return JSON.parse(response.choices[0]?.message.content.trim() || {});
    } catch (error) {
      if (attempt < maxRetries - 1) {
        console.warn(`Attempt ${attempt + 1} failed. Retrying...`);
      } else {
        console.error("Error calling OpenAI API:", error);
        throw error; // 超过最大重试次数时抛出错误
      }
    }
  }
}

// 翻译并写入到对应语言的 JSON 文件中
async function translateGameData(gameName: string) {
  const enFilePath = path.join(localeDir, "en.json");

  // 读取 en.json
  const enData = await readJsonFile(enFilePath);
  console.log("Read en.json Data");

  if (!enData[gameName]) {
    throw new Error(`Game "${gameName}" not found in en.json`);
  }

  const gameData = enData[gameName];

  // 遍历每种语言
  for (const lang of languages) {
    const langFilePath = path.join(localeDir, `${lang}.json`);
    const langData = await readJsonFile(langFilePath);
    console.log(`Read ${lang}.json: `, langData);

    // 将翻译后的数据追加到对应语言的 JSON 文件中
    langData[gameName] = await translateContent(JSON.stringify(gameData), lang);

    // 写回文件
    await writeJsonFile(langFilePath, langData);

    console.log(`Translation for ${gameName} added to ${lang}.json`);
  }
}

// 主函数：接收用户输入并开始翻译
async function main() {
  const gameName = process.argv[2];
  if (!gameName) {
    console.error("Please provide a game name as an argument.");
    process.exit(1);
  }

  try {
    console.log("Translation begin...");
    await translateGameData(gameName);
    console.log("Translation completed.");
  } catch (error) {
    console.error("Error during translation:", error);
  }
}

main();
