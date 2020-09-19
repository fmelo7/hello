const { Service } = require('../../lib');

class TesteService extends Service {
    constructor() {
        super({
            module: 'TesteService',
        });
    }

    calculate(keys, clicks) {
        this.log.info(`calculateting something...${[keys, clicks]}`);

        // calculate
        return this.calculateClicks(keys, keys, clicks, 0);
    }

    calculateClicks(onoff, keys, clicks, n) {
        this.log.info(`calculating clicks...${[keys, clicks, n]}`);

        // end
        if (n === clicks) return keys;

        // updating onoff
        // eslint-disable-next-line no-param-reassign
        onoff = this.updateOnOff(onoff, keys, 0);

        // updating keys
        // eslint-disable-next-line no-param-reassign
        keys = this.updateKeys(onoff, keys, 0);

        return this.calculateClicks(onoff, keys, clicks, n + 1);
    }

    updateKeys(onoff, keys, n) {
        this.log.info(`updating keys...${[keys, n]}`);

        // end
        if (n === keys.length) return keys;

        // prev cell
        const prev = n === 0 ? 0 : onoff[n - 1];

        // next cell
        const next = n === keys.length - 2 ? 0 : onoff[n + 1];

        // updating
        // eslint-disable-next-line no-param-reassign
        keys[n] = prev === next ? 1 : 0;

        return this.updateKeys(onoff, keys, n + 1);
    }

    updateOnOff(onoff, keys, n) {
        this.log.info(`updating onoff... ${[onoff, n]}`);

        // end
        if (n === keys.length) return onoff;

        // updating
        // eslint-disable-next-line no-param-reassign
        onoff[n] = keys[n];

        // call recursive
        return this.updateOnOff(onoff, keys, n + 1);
    }
}

module.exports = new TesteService();
