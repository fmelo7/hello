const Loggable = require('../../lib/loggable');

class HelloController extends Loggable {
    constructor() {
        super({
            module: 'HelloController'
        });
    }

    respond(req, res, next) {
        this.log.info(`responding call ${req.params.name}`);
        res.send(`hello ${req.params.name}`);
        next();
    }
}

module.exports = new HelloController();
