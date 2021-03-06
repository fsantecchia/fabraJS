const apiRouter = require('./api/router');
const express = require('express');
const mongoose = require('mongoose');

const baseApiURL = '/api';
const server = express();
const serverPort = 5001;
const targetURL = express.static('./target');

const startServer = function () {
    server.use(targetURL);
    server.use(baseApiURL, apiRouter);

    mongoose.connect('mongodb://localhost/test');

    server.listen(serverPort);
    
    console.log('Listening HTTP on port:' + serverPort);
};

startServer();
