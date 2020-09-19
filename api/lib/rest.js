const fetch = require('node-fetch');
const Service = require('../lib/service');

class Rest extends Service {
    constructor({ module, config }) {
        super({
            module,
            config,
        });

        this.fetch = fetch;
    }

    post(url, body) {
        this.log.info(`post [${url}] request body [${JSON.stringify(body)}]`);

        const options = {};
        options.method = 'POST';
        options.timeout = this.config.timeout;
        options.body = body;

        return this.fetch(url, options).then(response => this.responseHandler(response));
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
