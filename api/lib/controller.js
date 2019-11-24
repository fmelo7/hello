const Loggable = require('./loggable');

class Controller extends Loggable {
    constructor({ module, config }) {
        super({
            module
        });

        this.config = config || {};
    }
}

module.exports = Controller;
