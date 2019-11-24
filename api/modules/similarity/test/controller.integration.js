const supertest = require('supertest');
const { expect } = require('chai');
const { config } = require('../../../lib');
const server = require('../../../../app');

describe.skip('Module Similarity', () => {
    before(() => (config ? (config.log.enabled = false) : null));

    after(() => server.close());

    // beforeEach((done) => setTimeout(done, 500));

    // afterEach((done) => setTimeout(done, 500));

    it('deve retornar similaridade', (done) => {
        supertest(server)
            .get('/similarity/text1/text2')
            .send()
            .expect((res) => {
                expect(res.status).to.be.eq(200);
                expect(res.body.data).to.be.ok;
                expect(res.body.soundex).to.be.ok;
                expect(res.body.levenDist).to.be.ok;
            })
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
