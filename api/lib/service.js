const Loggable = require('../lib/loggable');

class Service extends Loggable {
    constructor({ module, config }) {
        super({
            module
        });

        this.config = config || {};
    }
}

module.exports = Service;
