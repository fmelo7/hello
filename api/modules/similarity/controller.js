const { Loggable } = require('../../lib');
const service = require('./service/service');

class SimilarityController extends Loggable {
    constructor() {
        super({
            module: 'SimilarityController'
        });
    }

    respond(req, res, next) {
        let data = {};

        if (req.method === 'POST') {
            data = req.body;
        } else {
            data = req.params;
        }

        this.log.info(`responding call ${JSON.stringify(data)}`);

        const s1 = service.soundex(data.text1);
        const s2 = service.soundex(data.text2);
        const sim = Math.floor(service.levenshteinDistance(data.text1, data.text2) * 100);

        res.send({
            data,
            soundex: {
                s1,
                s2
            },
            levenDist: {
                sim
            }
        });

        next();
    }
}

module.exports = new SimilarityController();
