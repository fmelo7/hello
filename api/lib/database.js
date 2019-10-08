const mongoose = require('mongoose');
const Loggable = require('../lib/loggable');
const config = require('../lib/config');

class Database extends Loggable {
    constructor() {
        super({
            module: 'Database'
        });

        this.config = config;
        this.mongoose = mongoose;
        this.mongoose.Promise = global.Promise;

        this.connect();
    }

    connect() {
        if (this.config.db) {
            this.mongoose
                .connect(this.config.db.url, this.config.db.options)
                .then(() => {
                    this.log.info(`Banco de dados conectado com sucesso [${this.config.db.url}]`);
                })
                .catch((err) => {
                    this.log.error(`Erro ao tentar conectar ao bando de dados [${this.config.db.url}]`, err);
                });

            this.mongoose.connection.on('close', () => {
                this.log.info(`A conexão com o banco de dados foi fechada [${this.config.db.url}]`);
            });
        }
    }
}

module.exports = Database;
