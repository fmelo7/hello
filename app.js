const { server } = require('./api/lib/server');
const config = require('./api/lib/config');
const routes = require('./api/lib/routes');
const logger = require('./api/lib/logger');

// iniciando servidor na porta do ambiente ou do config
server.listen(process.env.PORT || config.app.port, () => {
    logger.info('aplicacao esta rodando em %s', server.url);

    // importando rotas dos modulos
    routes.importModulesRoutes();
});
