const fs = require('fs');
const path = require('path');

// 定义要处理的语言列表
const languages = ['cn', 'de', 'en', 'es', 'fr', 'jp', 'pt', 'ru', 'tw'];

// 定义输入和输出目录
const inputDir = path.join(__dirname, '../messages');  // 假设 {lang}.json 文件位于 messages 目录下
const outputDir = path.join(__dirname, '../split_messages'); // 拆分后的文件存放目录

// 确保目录存在，如果不存在就创建
const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// 读取和拆分 JSON 文件的主函数
const splitJsonByGameKey = () => {
    languages.forEach(lang => {
        const langFilePath = path.join(inputDir, `${lang}.json`);

        // 检查语言的 JSON 文件是否存在
        if (fs.existsSync(langFilePath)) {
            const langData = JSON.parse(fs.readFileSync(langFilePath, 'utf-8'));

            // 为该语言创建一个输出目录
            const langOutputDir = path.join(outputDir, lang);
            ensureDirectoryExists(langOutputDir);

            // 遍历 gameKey 并为每个 gameKey 创建一个单独的 JSON 文件
            Object.keys(langData).forEach(gameKey => {
                const gameData = langData[gameKey];
                const gameFilePath = path.join(langOutputDir, `${gameKey}.json`);

                // 将 gameKey 的数据写入独立的 JSON 文件
                fs.writeFileSync(gameFilePath, JSON.stringify(gameData, null, 2), 'utf-8');
                console.log(`Written ${gameKey}.json for language ${lang}`);
            });
        } else {
            console.warn(`Language file not found: ${langFilePath}`);
        }
    });
};

// 运行拆分函数
splitJsonByGameKey();