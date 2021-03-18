const express = require('express');
const cors = require('cors');
const { dbCOnnection } = require('../database/config');

class Server {
    constructor() {
        /// Atributes
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        /// DB Connection
        this.connectDB();

        /// Middlewares
        this.middlewares();

        /// Routes
        this.routes();
    }

    async connectDB() {
        await dbCOnnection();
    }

    middlewares() {
        /// CORS
        this.app.use(cors());

        /// Parseo y lectura del body
        this.app.use( express.json() );

        /// Directorio público
        this.app.use( express.static('../public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });
    }
}

module.exports = Server;