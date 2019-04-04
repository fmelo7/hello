const { server, routes } = require('../../lib');
const controller = require('./controller');

// full = { base: '/aplicacao', module: 'hello', full: '/aplicacao/hello' }
const { full } = routes.info(__filename);

// configurando as rotas do modulo
server.get(`${full}/:text1/:text2`, controller.respond.bind(controller));

server.post(`${full}`, controller.respond.bind(controller));
