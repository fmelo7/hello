const sinon = require('sinon');
const { expect } = require('chai');
const { config } = require('../../../lib');
const controller = require('../controller');

describe(controller.module, () => {
    before(() => {
        config.log.enabled = false;
    });

    afterEach(() => sinon.restore());

    describe('respond', () => {
        it('deve conter o metodo respond', (done) => {
            expect(controller.respond).to.be.exist;
            done();
        });

        it('deve retornar similaridade ao chamar respond', (done) => {
            const req = {
                params: {
                    text1: 'some-name',
                    text2: 'some-name',
                },
            };

            const res = {
                send: (response) => {
                    expect(response.data).to.be.ok;
                    expect(response.soundex).to.be.ok;
                    expect(response.levenDist).to.be.ok;
                    done();
                },
            };

            controller.respond(req, res, sinon.spy());
        });

        it('deve retornar similaridade ao chamar respond', (done) => {
            const req = {
                method: 'POST',
                body: {
                    text1: 'some-name',
                    text2: 'some-name',
                },
            };

            const res = {
                send: (response) => {
                    expect(response.data).to.be.ok;
                    expect(response.soundex).to.be.ok;
                    expect(response.levenDist).to.be.ok;
                    done();
                },
            };

            controller.respond(req, res, sinon.spy());
        });
    });
});
