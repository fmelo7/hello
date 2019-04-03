const { server, routes } = require('../../lib');
const controller = require('./controller');

const { srv } = server;

// full = { base: '/aplicacao', module: 'hello', full: '/aplicacao/hello' }
const { full } = routes.info(__filename);

// configurando as rotas do modulo
srv.get(`${full}/:name`, controller.respond.bind(controller));
srv.head(`${full}/:name`, controller.respond.bind(controller));
