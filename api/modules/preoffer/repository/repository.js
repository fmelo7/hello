const { Repository } = require('../../../lib');
const model = require('../model/model');

class PreOfferRepository extends Repository {
    constructor() {
        super({
            module: 'PreOfferRepository',
            model,
        });
    }
}

module.exports = new PreOfferRepository();
