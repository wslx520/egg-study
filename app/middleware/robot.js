module.exports = (options, app) => (
    function * robotMiddleware(next) {
        const source = this.get('user-agent') || '';
        const match = options.ua.some(ua => ua.test(source));
        console.log(options.ua, source, match);
        if (match) {
            this.status = 403;
            this.message = 'You are not welcome, robot';
        } else {
            yield next
        }
    }
)