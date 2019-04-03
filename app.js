const { server, config, routes, logger } = require('./api/lib');

// iniciando servidor na porta do ambiente ou do config
server.listen(process.env.PORT || config.app.port, () => {
    logger.info('Server', `aplicacao esta rodando em ${server.url}`);

    // importando rotas dos modulos
    routes.importModulesRoutes();
});

server.on('close', () => logger.info('Server', 'o servidor foi finalizado'));

module.exports = server;
