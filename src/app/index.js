const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const router = require('../routes');

class Server {
    constructor() {
        this.server = express();
        this.middlaware();
        this.router();
    }

    middlaware() {
        this.server.use(cors());
        this.server.use(helmet());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    router() {
        this.server.use(router);
    }
}
module.exports = new Server().server;
