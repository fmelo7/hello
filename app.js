const { server } = require('./api/lib/server');
const config = require('./api/lib/config');
const routes = require('./api/lib/routes');
const logger = require('./api/lib/logger');

// iniciando servidor na porta do ambiente ou do config
server.listen(process.env.PORT || config.app.port, () => {
    logger.info('Server', `aplicacao esta rodando em ${server.url}`);

    // importando rotas dos modulos
    routes.importModulesRoutes();
});

server.on('close', () => logger.info('Server', 'o servidor foi finalizado'));

module.exports = server;
