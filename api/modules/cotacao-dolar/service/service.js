const moment = require('moment');
const { Rest, config } = require('../../../lib');

class CotacaoDolarService extends Rest {
    constructor() {
        super({
            module: 'CotacaoDolarService',
            config: config.cotacaoDolarService,
        });
    }

    cotacaoDolar() {
        const data = moment().add(-1, 'days').format('MM-DD-YYYY');
        this.log.info(`iniciando cotacao do dolar do dia ${data}`);

        // https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2703-22-2019%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

        // https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2704-05-2019%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

        // https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='04-05-2019'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao

        const url = `${this.config.url}?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

        // const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2703-22-2019%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao';

        return this.get(url).then((response) => {
            if (response.value) return response.value[0];
            return response;
        });
    }
}

module.exports = new CotacaoDolarService();
