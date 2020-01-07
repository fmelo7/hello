const { Controller } = require('../../lib');
const service = require('./service/service');

class PreOfferController extends Controller {
    constructor() {
        super({
            module: 'PreOfferController',
        });
        this.service = service;
    }

    register(req, res, next) {
        this.log.info(`responding call ${req.body.msisdnList}`);
        // TODO chheck is param is empty: bad request
        res.send(this.service.register(req.body.msisdnList));
        next();
    }
}

module.exports = new PreOfferController();
