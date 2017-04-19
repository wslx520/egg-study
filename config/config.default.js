exports.keys = 'askldjfklasdjkfl1231';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0' 
}
// 注意大小写
exports.middleware = ['robot'];

exports.robot = {
    ua: [
        /baiduspider/i
    ]
}