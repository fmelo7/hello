const supertest = require('supertest');
const { expect } = require('chai');
const { config } = require('../../../lib');
const server = require('../../../../app');

describe.skip('Cotacao Dolar', () => {
    before(() => {
        config.log.enabled = false;
    });

    after(() => server.close());

    it('deve retornar a cotacao do dolar', (done) => {
        supertest(server)
            .get('/cotacao-dolar')
            .send()
            .expect((res) => {
                console.log(res.body);
                expect(res.status).to.be.eq(200);
                expect(res.body.cotacaoCompra).to.be.ok;
                expect(res.body.cotacaoVenda).to.be.ok;
                expect(res.body.dataHoraCotacao).to.be.ok;
            })
            .end((err) => {
                if (err) throw err;
                done();
            });
    });
});
