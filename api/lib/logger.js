const config = require('./config');

class Logger {
    constructor() {
        this.config = config;
        this.write = (module, msg, obj) => `${config.app.name}: ${module || ''}: ${msg} ${obj ? JSON.stringify(obj) : ''}`;
    }

    info(module, msg, obj = null) {
        if (this.config.log.debug) {
            console.info(this.write(module, msg, obj));
        }
    }

    warn(module, msg, obj = null) {
        if (this.config.log.debug) {
            console.warn(this.write(module, msg, obj));
        }
    }

    error(module, msg, obj = null) {
        if (this.config.log.debug) {
            console.error(this.write(module, msg, obj));
        }
    }
}

module.exports = new Logger();
