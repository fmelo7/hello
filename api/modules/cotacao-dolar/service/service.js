const { Rest, config } = require('../../../lib');
const moment = require('moment');

class CotacaoDolarService extends Rest {
    constructor() {
        super({
            module: 'CotacaoDolarService',
            config: config.cotacaoDolarService
        });
    }

    cotacaoDolar() {
        const data = moment().format('DD-MM-YYYY');

        this.log.info(`iniciando cotacao do dolar do dia ${data}`);

        const url = `${this.config.url}?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

        return this.get(url).then((response) => {
            if (response.value) return response.value[0];
            return response;
        });
    }
}

module.exports = new CotacaoDolarService();
