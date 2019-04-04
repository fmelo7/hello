const { Loggable } = require('../../lib');
const service = require('./service/service');

class CotacaoDolarController extends Loggable {
    constructor() {
        super({
            module: 'CotacaoDolarController'
        });

        this.service = service;
    }

    respond(req, res, next) {
        this.log.info('responding call');
        this.service.cotacaoDolar().then(response => res.send(response));
        next();
    }
}

module.exports = new CotacaoDolarController();