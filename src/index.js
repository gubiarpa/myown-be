
/// Loads .env file
require('dotenv').config();


/// Instance Server object and listen
const Server = require('./models/server');
const server = new Server();
server.listen();
