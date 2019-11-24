const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const controller = require('../controller');

describe(controller.module, () => {
    before(() => {
        config.log.debug = false;
    });

    after(() => {});

    afterEach(() => sinon.restore());

    describe('respond', () => {
        it('deve conter o metodo respond', (done) => {
            expect(controller.respond).to.be.exist;
            done();
        });

        it('deve retornar a cotacao dolar do dia ao chamar respond', (done) => {
            sinon.stub(controller.service, 'cotacaoDolar').resolves({
                data: 123
            });

            const req = {};

            const res = {
                send: (response) => {
                    expect(response).to.be.ok;
                    done();
                }
            };

            controller.respond(req, res, sinon.spy);
        });
    });
});
