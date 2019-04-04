const { expect } = require('chai');
const { config } = require('../../../../lib');
const service = require('../../service/service');

describe.only('Similarity', () => {
    before(() => {
        config.log.debug = false;
    });

    after(() => {});

    const tests = {
        '': '',
        // 'MARIA GRACAS': 'MARIA DAS GRACAS',
        // 'JOSE DA SILVA': 'JOSE SILVA',
        'MARIA VELOSO CAVALVANTI BATISTA': 'MARIA V C BATISTA'
        // 'MARIA DAS GRACAS DRUMOND ANDRADE': 'MARIA GRACAS DRUMOND ANDRADE',
        // 'JOAO SILVA': 'JOAO JUNIOR'
    };

    const precision = 60;

    describe('Similarity - Soundex', () => {
        it('Deve possuir método soundex', (done) => {
            expect(service).to.have.property('soundex');
            done();
        });

        Object.keys(tests).forEach((k, i) => {
            Object.keys(tests).forEach((l, j) => {
                const s1 = service.soundex(k);
                const s2 = service.soundex(tests[l]);
                it(`${i}.${j}) Comparar [${k}] com [${tests[l]}]: [${s1}] e [${s2}] = ${s1 === s2}`, (done) => {
                    // expect(s1 === s2).to.be.eq(i === j);
                    done();
                });
            });
        });
    });

    describe('Similarity - Levenshtein Distance', () => {
        it('Deve possuir método levenshteinDistance', (done) => {
            expect(service).to.have.property('levenshteinDistance');
            done();
        });

        Object.keys(tests).forEach((k, i) => {
            Object.keys(tests).forEach((l, j) => {
                const sim = Math.floor(service.levenshteinDistance(k, tests[l]) * 100);
                it(`${i}.${j}) Comparar [${k}] com [${tests[l]}]: ${sim}% ${sim > precision}`, (done) => {
                    // expect(sim > precision).to.be.eq(i === j);
                    done();
                });
            });
        });
    });

    describe('Similarity - combinado Soundex e Levenshtein Distance', () => {
        Object.keys(tests).forEach((k, i) => {
            Object.keys(tests).forEach((l, j) => {
                const s1 = service.soundex(k);
                const s2 = service.soundex(tests[l]);
                const sim = Math.floor(service.levenshteinDistance(s1, s2) * 100);
                it(`${i}.${j}) Comparar [${k}] com [${tests[l]}]: ${s1} e ${s2} = ${s1 === s2}: ${sim}% ${sim > precision}`, (done) => {
                    expect(sim > precision).to.be.eq(i === j);
                    done();
                });
            });
        });
    });
});
