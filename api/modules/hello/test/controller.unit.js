const sinon = require('sinon');
const { expect } = require('chai');
const { config, TestHelper } = require('../../../lib');
const controller = require('../controller');

describe(controller.module, () => {
    before(() => TestHelper.before(config));

    afterEach(() => sinon.restore());

    describe('respond', () => {
        it('deve conter o metodo respond', (done) => {
            expect(controller.respond).to.be.exist;
            done();
        });

        it('deve retornar some hello name ao chamar respond', (done) => {
            const req = {
                params: {
                    name: 'some-name',
                },
            };

            const res = {
                send: (response) => {
                    expect(response).to.be.eq('hello some-name');
                    done();
                },
            };

            controller.respond(req, res, sinon.spy());
        });
    });
});
