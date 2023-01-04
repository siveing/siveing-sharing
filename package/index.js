console.log('here is sample from siveing');

const WIN_PARAMS = 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0';

function getTelegramUrl(options = {}) {
    const { url, title } = options;

    const params = encodeParams({
        url,
        text: title,
    });

    return `https://t.me/share/url?${params}`;
}

function telegramShare(options = {}) {
    return window.open(getTelegramUrl(options), '_blank', WIN_PARAMS);
}

function testing(string) {
    return `Your text passing is ${string}`;
}

function encodeParams(obj) {
    return Object.keys(obj)
        .filter((k) => typeof obj[k] !== 'undefined' && obj[k] !== '')
        .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
        .join('&');
}

module.exports = {
    getTelegramUrl,
    telegramShare,
    testing
}