/**
 * REST Api for test of Toolbox Company.
 * @author Javier Stifano
 */
'use strict'; 

require('dotenv').config(); // Used to just get the ENV variables from .env file
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const { apiEndpoint, port } = require('./config');

// Permite el acceso al body de la petición
server.use(bodyParser.json());

// Acceso a los parámetros de la URL
server.use(bodyParser.urlencoded({
    extended: true
}));

// Importo la ruta del servicio
const textRoute = require('./routes/textRoute');

// Importo el controlador para manejar la petición
server.use(apiEndpoint, textRoute);

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = server;
