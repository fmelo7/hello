const { server, config, routes, logger, Database } = require('./api/lib');

let database;

// iniciando servidor na porta do ambiente ou do config
server.listen(process.env.PORT || config.app.port, () => {
    logger.info('Server', `Aplicacao rodando em [${server.url}]`);

    // iniciando a conexão com o banco de dados
    database = new Database().mongoose;

    // importando rotas dos modulos
    routes.importModulesRoutes();
});

// configurando rota de health check
server.get('/healthcheck', (req, res, next) => {
    res.send(`${config.app.name} está rodando.`);
    next();
});

// configurando rota de health check
server.get('/', (req, res, next) => {
    res.send(`${config.app.name} está rodando.`);
    next();
});

// finalizar o restify no stop da aplicação
process.on('SIGINT', () => server.close());

// finaliza a conexão com o banco sempre que o restify for finalizado
server.on('close', () => {
    logger.info('Aplicação', 'O Servidor do restify foi finalizado.');
    database.connection.close();
});

module.exports = server;
