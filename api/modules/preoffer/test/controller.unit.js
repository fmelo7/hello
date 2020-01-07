const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const controller = require('../controller');

describe.skip(controller.module, () => {
    before(() => {
        config.log.enabled = false;
    });

    afterEach(() => sinon.restore());

    describe('register', () => {
        it('deve conter o metodo register', (done) => {
            expect(controller.register).to.be.exist;
            done();
        });

        it('deve retornar some msisdnList name ao chamar register', (done) => {
            const req = {
                body: {
                    msisdnList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                },
            };

            const res = {
                send: (response) => {
                    expect(response).to.be.eq('msisdnList: 1,2,3,4,5,6,7,8,9,0');
                    done();
                },
            };

            controller.register(req, res, sinon.spy());
        });
    });
});
