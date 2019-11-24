const config = require('./config');
const routes = require('./routes');
const server = require('./server');
const logger = require('./logger');
const Database = require('./database');
const Controller = require('./controller');
const Service = require('./service');
const Rest = require('./rest');

module.exports = {
    config,
    routes,
    server,
    logger,
    Database,
    Controller,
    Service,
    Rest,
};
