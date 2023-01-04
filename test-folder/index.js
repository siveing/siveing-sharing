const { getTelegramUrl,
    telegramShare,
    testing } = require('siveing-sharing');

let objectShare = { url: 'https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js', title: '' };

console.log(getTelegramUrl(objectShare));
console.log(testing('siveing'));