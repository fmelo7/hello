const { Repository } = require('../../../lib');
const model = require('../model/model');

class PreOfferRepository extends Repository {
    constructor() {
        super({
            module: 'PreOfferRepository',
            model,
        });
    }

    findOne(query) {
        return this.model.findOne(query).exec();
    }
}

module.exports = new PreOfferRepository();
