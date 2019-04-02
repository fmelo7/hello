const restify = require('restify');

respond = (req, res, next) => {
    console.log(`responding call ${req.params.name}`);
    res.send(`hello ${req.params.name}`);
    next();
};

const server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(process.env.PORT || 8080, () => console.log('%s listening at %s', server.name, server.url));
