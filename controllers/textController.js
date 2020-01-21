'use strict';

const ResponseService = require('../utils/response');

/**
 * Controlador que recibe un texto y lo 
 * devuelve al cliente que lo solicito.
 * @param {string} req.body.text Texto solicitado
 */
const returnText = async (req, res) => {
    console.log(`Request POST ::: /text`);
    return res.json(ResponseService.craftOkResponseObj(req.body.text, 200));
}

module.exports = {
    returnText: returnText
}