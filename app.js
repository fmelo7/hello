const restify = require('restify');
const helloController = require('./api/modules/hello/controller');

const server = restify.createServer();
server.get('/hello/:name', helloController.respond.bind(helloController));
server.head('/hello/:name', helloController.respond.bind(helloController));

server.listen(process.env.PORT || 8080, () => console.log('%s listening at %s', server.name, server.url));
