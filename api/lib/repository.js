const Service = require('../lib/service');

class Repository extends Service {
    constructor({ module, model }) {
        super({
            module,
        });

        this.model = model;
    }

    findOne(query) {
        // TODO promisify
        return this.model.findOne(query).exec((err, result) => {
            if (err) return this.handleError(err);
            return result;
        });
    }

    save(model) {}

    handleError(err) {
        this.log.error(`handler error ${err}`);
        return err;
    }
}

module.exports = Repository;
