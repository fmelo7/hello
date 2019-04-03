const config = require('./config');

class Logger {
    constructor() {
        this.config = config;
        this.write = (module, msg, obj) => `${config.app.name}: ${module || ''}: ${msg} ${obj ? JSON.stringify(obj) : ''}`;
    }

    info(msg, obj) {
        console.info(this.write(msg, obj));
    }

    warn(msg, obj) {
        console.warn(this.write(msg, obj));
    }

    error(msg, obj) {
        console.error(this.write(msg, obj));
    }
}

module.exports = new Logger();
