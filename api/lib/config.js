// carrega o arquivo de configuração conforme a variavel NODE_ENV.
const cwd = process.cwd();
const env = process.env.NODE_ENV || 'default';
const config = require(`${cwd}/api/config/env/${env}`);

// injeta automaticamente a propriedade app.env no json de configuração
config.app.env = env;

module.exports = config;
