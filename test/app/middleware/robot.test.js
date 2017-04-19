const assert = require('assert');
const mock = require('egg-mock')
const request = require('supertest')

describe('test/app/middleware/robot.test.js', function(){
    let app;
    before(() => {
        app = mock.app();
        return app.ready();
    })
    afterEach(mock.restore);
    it('should block robot', () => (
        request(app.callback())
            .get('/')
            .set('User-Agent', 'Baiduspider')
            .expect(403)
    ))
})