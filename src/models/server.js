const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        /// Atributes
        this.app = express();
        this.port = process.env.PORT;

        /// Middlewares
        this.middlewares();

        /// Routes
        this.routes();
    }

    middlewares() {
        /// CORS
        this.app.use(cors());

        /// Directorio público
        this.app.use( express.static('../public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                name: 'gubiarpa'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });
    }
}

module.exports = Server;