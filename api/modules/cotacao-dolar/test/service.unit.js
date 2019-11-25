const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const service = require('../service/service');

describe(service.module, () => {
    before(() => {
        config.log.debug = false;
    });

    afterEach(() => sinon.restore());

    describe('cotacaoDolar', () => {
        it('deve conter o metodo cotacaoDolar', (done) => {
            expect(service.cotacaoDolar).to.be.exist;
            done();
        });

        it('deve retornar ok ao chamar cotacaoDolar', (done) => {
            sinon.stub(service, 'get').resolves({
                data: 123
            });

            service.cotacaoDolar().then((res) => {
                expect(res).to.be.ok;
                done();
            });
        });
    });
});
