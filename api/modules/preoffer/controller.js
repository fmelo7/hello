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
        this.log.info(`DEBUG----------> ${!req.body && !req.body.msisdn}`);
        if (!req.body && !req.body.msisdn) {
            next(400);
        }
        this.log.info(`responding call ${req.params.msisdn || req.body.msisdn}`);
        res.send(this.service.register(req.params.msisdn));
        next();
    }
}

module.exports = new PreOfferController();
