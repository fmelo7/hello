const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const controller = require('../controller');

describe.skip(controller.module, () => {
    before(() => {
        config.log.debug = false;
    });

    after(() => {});

    afterEach(() => {
        sinon.restore();
    });

    describe('respond', () => {
        it('deve conter o metodo respond', (done) => {
            expect(controller.respond).to.be.exist;
            done();
        });

        it('deve retornar a cotacao dolar do dia ao chamar respond', (done) => {
            const req = {};

            const res = {
                send: (response) => {
                    expect(response.cotacaoCompra).to.be.ok;
                    expect(response.cotacaoVenda).to.be.ok;
                    expect(response.dataHoraCotacao).to.be.ok;
                    done();
                }
            };

            controller.respond(req, res, sinon.spy);
        });
    });
});
