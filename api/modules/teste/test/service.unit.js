const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const service = require('../service');

describe(service.module, () => {
    before(() => (config ? (config.log.enabled = false) : null));

    afterEach(() => sinon.restore());

    describe('calculate', () => {
        it('should return something', (done) => {
            // inputs
            const keys = [0, 1, 0, 1, 0, 1, 0, 1];
            const clicks = 1;

            // expected
            const expected = JSON.stringify([0, 1, 1, 0, 0, 1, 0, 0]);

            // actual
            const actual = JSON.stringify(service.calculate(keys, clicks));

            // call method
            expect(actual).to.be.eq(expected);

            // end
            done();
        });
    });
});
