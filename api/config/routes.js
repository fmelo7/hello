const glob = require('glob');
const path = require('path');

class Routes {
    constructor() {
        this.module = 'Routes';
        this.glob = glob;
        this.path = path;
    }

    /**
     * Importar as rotas dos modulos
     */
    importModulesRoutes() {
        this.glob.sync('api/modules/*/route.js').forEach((file) => {
            console.log(`Importando rotas de [${file}]`);
            require(this.path.resolve(file));
        });
    }

    /**
     * Retorna a informação da rota do modulo pelo caminho do arquivo
     * ex.: {base: aplicacao, module: hello, full: aplicacao.hello}
     *
     * @param {String} routeFile
     */
    info(routeFile) {
        const moduleName = this.path.basename(this.path.dirname(routeFile));
        const full = `/${moduleName}`;

        return {
            full,
            module: moduleName
        };
    }
}

module.exports = new Routes();
