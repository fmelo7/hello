const supertest = require('supertest');
const { expect } = require('chai');
const { config } = require('../../../lib');
const server = require('../../../../app');

describe.skip('Module Hello', () => {
    before(() => {
        config.log.debug = false;
    });

    after(() => server.close());

    beforeEach((done) => {
        setTimeout(done, 500);
    });

    afterEach((done) => {
        setTimeout(done, 500);
    });

    it('deve retornar hello name', (done) => {
        supertest(server)
            .get('/hello/some-name')
            .send()
            .expect((res) => {
                expect(res.status).to.be.eq(200);
                expect(res.body).to.be.eq('hello some-name');
            })
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
