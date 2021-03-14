const express = require('express');

class Server {
    constructor() {
        /// Atributes
        this.app = express();
        this.port = process.env.PORT;

        /// Middlewares


        /// Routes
        this.routes();
    }

    middlewares() {
        this.app.use( express.static('../public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send('Hello world');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });
    }
}

module.exports = Server;