const restify = require('restify');
const { logger } = require('../lib');

class Server {
    constructor() {
        this.restify = restify;
        this.logger = logger;
        this.server = null;
        this.configure();
    }

    configure() {
        this.server = this.restify.createServer({
            log: this.logger
        });
    }
}

const server = new Server();

module.exports = server.server;
