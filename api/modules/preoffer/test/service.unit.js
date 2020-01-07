const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const service = require('../service/service');

describe(service.module, () => {
    before(() => {
        config.log.debug = false;
    });

    afterEach(() => sinon.restore());

    describe('register', () => {
        it('deve conter o metodo register', (done) => {
            expect(service.register).to.be.exist;
            done();
        });

        it('deve retornar ok ao chamar register', (done) => {
            expect(service.register([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).to.be.eq('msisdnList: 1,2,3,4,5,6,7,8,9,0');
            done();
        });
    });
});
