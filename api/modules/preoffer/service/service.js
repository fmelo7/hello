const { Service } = require('../../../lib');
const repository = require('../repository/repository');

class PreOfferService extends Service {
    constructor() {
        super({
            module: 'PreOfferService',
        });

        this.repository = repository;
    }

    register(msisdnList) {
        this.log.info(`register: ${msisdnList}`);

        return `msisdnList: ${msisdnList}`;
    }
}

module.exports = new PreOfferService();
