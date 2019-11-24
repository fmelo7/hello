class TestHelper {
    static before(config) {
        this.setLogEnabled(config);
    }

    static after(server) {
        this.closeServer(server);
    }

    static closeServer(server) {
        server ? server.close() : null;
    }

    static setLogEnabled(config) {
        config ? (config.log.enabled = false) : null;
    }
}

module.exports = TestHelper;
