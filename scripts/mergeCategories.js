const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../config')
const categoriesDir = path.join(dir, 'categories');
const outputFile = path.join(dir, 'index.ts');

fs.readdir(categoriesDir, (err, files) => {
  if (err) throw err;

  const importedVars = [];
  const imports = files
    .filter(file => file.endsWith('.ts')) // 确保是 JS 文件
    .map(file => {
      const name = path.basename(file, '.ts');
      const variable = name.replace('-', '')
      importedVars.push(variable)
      return `import ${variable} from './categories/${name}';`;
    });

  const exportStatement = `export default [\n${importedVars.map(variable => `  ...${variable}`).join(',\n')}\n];`;

  const content = [...imports, exportStatement].join('\n');

  fs.writeFile(outputFile, content, err => {
    if (err) throw err;
    console.log('index.ts 文件已生成。');
  });
});
