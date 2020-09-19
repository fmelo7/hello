const { Controller } = require('../../lib');

class HelloController extends Controller {
    constructor() {
        super({
            module: 'HelloController',
        });
    }

    respond(req, res, next) {
        this.log.info(`responding call ${req.params.name}`);
        res.send(`hello ${req.params.name || req.body.name}`);
        next();
    }
}

module.exports = new HelloController();
