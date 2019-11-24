const Service = require('./service');

class Controller extends Service {
    constructor({ module }) {
        super({
            module,
        });
    }
}

module.exports = Controller;
