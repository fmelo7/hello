const { Rest, config } = require('../../../lib');

class CotacaoDolarService extends Rest {
    constructor() {
        super({
            module: 'CotacaoDolarService',
            config: config.cotacaoDolarService
        });
    }

    cotacaoDolar() {
        this.log.info('iniciando cotacao do dolar ');
        // ?@dataCotacao='03-22-2019'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

        this.log.info(JSON.stringify(this.config));

        const url = `${this.config.url}?@dataCotacao='03-22-2019'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

        return this.get(url).then((response) => {
            if (response.value) return response.value[0];
            return response;
        });
    }
}

module.exports = new CotacaoDolarService();
