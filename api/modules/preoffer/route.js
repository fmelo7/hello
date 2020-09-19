const { server, routes } = require('../../lib');
const controller = require('./controller');

// full = { base: '/aplicacao', module: 'hello', full: '/aplicacao/hello' }
const { full } = routes.info(__filename);

// configurando as rotas do modulo
server.get(`${full}/register/:msisdn`, controller.register.bind(controller));

server.post(`${full}/register`, controller.register.bind(controller));
