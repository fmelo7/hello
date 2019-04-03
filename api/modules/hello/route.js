const { server, routes } = require('../../lib');
const controller = require('./controller');

// full = { base: '/aplicacao', module: 'hello', full: '/aplicacao/hello' }
const { full } = routes.info(__filename);

// configurando as rotas do modulo
server.get(`${full}/:name`, controller.respond.bind(controller));
server.head(`${full}/:name`, controller.respond.bind(controller));
