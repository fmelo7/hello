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
            log: this.logger,
        });

        this.server.use(this.restify.plugins.gzipResponse());
        this.server.use(this.restify.plugins.queryParser());
        this.server.use(this.restify.plugins.bodyParser());
    }
}

const server = new Server();

module.exports = server.server;
