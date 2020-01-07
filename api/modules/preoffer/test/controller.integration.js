const supertest = require('supertest');
const { expect } = require('chai');
const { config } = require('../../../lib');
const server = require('../../../../app');

describe('PreOffer', () => {
    before(() => {
        config.log.enabled = false;
    });

    after(() => server.close());

    it('deve retornar msisdnList', (done) => {
        supertest(server)
            .post('/preoffer/register')
            .send({
                msisdnList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            })
            .expect((res) => {
                expect(res.status).to.be.eq(200);
                expect(res.body).to.be.eq('msisdnList: 1,2,3,4,5,6,7,8,9,0');
            })
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
