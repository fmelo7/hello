const fetch = require('node-fetch');
const Loggable = require('../lib/loggable');

class Rest extends Loggable {
    constructor({ module, config }) {
        super({
            module
        });

        this.fetch = fetch;
        this.config = config;
    }

    post(url, body) {
        this.log.info(`post [${url}] request body [${JSON.stringify(body)}]`);

        const options = {};
        options.method = 'POST';
        options.timeout = this.config.timeout;
        options.body = body;

        return this.fetch(url, options).then(this.responseHandler);
    }

    get(url) {
        this.log.info(`get [${url}] request`);

        const options = {};
        options.method = 'GET';
        options.timeout = this.config.timeout;

        return this.fetch(url, options).then(response => this.responseHandler(response));
    }

    responseHandler(response) {
        this.log.info(`response handler ${JSON.stringify(response)}`);

        if (response.ok) return response.json();

        return response
            .json()
            .then(body => body)
            .catch(erro => erro);
    }
}

module.exports = Rest;
