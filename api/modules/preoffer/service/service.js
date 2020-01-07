const { Service } = require('../../../lib');

class PreOfferService extends Service {
    constructor() {
        super({
            module: 'PreOfferService',
        });
    }

    register(msisdnList) {
        this.log.info(`register: ${msisdnList}`);
        return `msisdnList: ${msisdnList}`;
    }
}

module.exports = new PreOfferService();
