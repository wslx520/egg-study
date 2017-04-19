module.exports = app => (
    class NewsController extends app.Controller {
        * list() {
            const {ctx} = this;
            const {page = 1} = ctx.query;
            const list = yield ctx.service.news.list(page);
            yield ctx.render('home.tpl', {list});
        }
    }
)