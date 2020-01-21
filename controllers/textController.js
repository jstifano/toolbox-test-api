'use strict';

const ResponseService = require('../utils/response');
const ValidationService = require('../utils/validation');

/**
 * Controlador que recibe un texto y lo 
 * devuelve al cliente que lo solicito.
 * @param {string} req.body.text Texto solicitado
 */
const returnText = async (req, res) => {
    if(!req.body.text) {
        return res.status(400).json(ResponseService.craftErrorResponseObj('Texto no enviado', 400));    
    } else if(!ValidationService.validateOnlyLetters(req.body.text)) {
        return res.status(400).json(ResponseService.craftErrorResponseObj('Paramátro inválido', 400));
    }
    else {
        return res.status(200).json(ResponseService.craftOkResponseObj(req.body.text, 200));
    }
}

module.exports = {
    returnText: returnText
}