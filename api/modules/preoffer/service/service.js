const { Service } = require('../../../lib');
const repository = require('../repository/repository');

class PreOfferService extends Service {
    constructor() {
        super({
            module: 'PreOfferService',
        });

        this.repository = repository;
    }

    register(msisdn) {
        this.log.info(`register: ${msisdn}`);

        return `msisdn: ${msisdn}`;
    }
}

module.exports = new PreOfferService();
