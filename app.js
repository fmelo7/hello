const { server } = require('./api/lib/server');
const routes = require('./api/lib/routes');

// iniciando servidor na porta do ambiente ou 8080
server.listen(process.env.PORT || 8080, () => {
    console.log('aplicacao esta rodando em %s', server.url);

    // importando rotas dos modulos
    routes.importModulesRoutes();
});
