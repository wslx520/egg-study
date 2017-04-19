module.exports = app => (class HomeController extends app.Controller {
    * index () {
        return this.ctx.body = 'Hello world';
    }
})