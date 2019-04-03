const { server } = require('../../config/server');
const routes = require('../../config/routes');
const controller = require('./controller');

// full = { base: '/aplicacao', module: 'hello', full: '/aplicacao/hello' }
const { full } = routes.info(__filename);

// configurando as rotas do modulo
server.get(`${full}/:name`, controller.respond.bind(controller));
server.head(`${full}/:name`, controller.respond.bind(controller));
