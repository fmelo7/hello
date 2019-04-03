const logger = require('./logger');

class Loggable {
    constructor({ module }) {
        this.module = module;
        this.logger = logger;
        this.configure();
    }

    configure() {
        this.log = {};

        this.log.info = (msg, obj) => {
            this.logger.info(this.module, msg, obj);
        };

        this.log.warn = (msg, obj) => {
            this.logger.warn(this.module, msg, obj);
        };

        this.log.error = (msg, obj) => {
            this.logger.error(this.module, msg, obj);
        };
    }
}

module.exports = Loggable;
