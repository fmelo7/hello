const restify = require('restify');

class Server {
    constructor() {
        this.restify = restify;
    }
}

const server = new Server();

module.exports = {
    restify: server.restify,
    server: server.restify.createServer()
};
