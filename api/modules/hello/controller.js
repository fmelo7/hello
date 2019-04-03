class HelloController {
    constructor() {
        this.module = 'HelloController';
    }

    respond(req, res, next) {
        console.log(`${this.module}: responding call ${req.params.name}`);
        res.send(`hello ${req.params.name}`);
        next();
    }
}

module.exports = new HelloController();
