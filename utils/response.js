'use strict';

/**
 * Servicio para manejar respuestas dinámicas de OK
 * @params :::
 * data --> La data obtenida despues de realizar la lógica
 * code --> Código HTTP (200, 202, 300, etc)
 */
const craftOkResponseObj = (data, code) => {
    if(!data) data = {};
    return { text: data, statusCode: code };
}
/**
 * Servicio para manejar respuestas dinámicas de error 
 * @params :::
 * message --> Mensaje que se mostrará cuando ocurre un error
 * statusCode --> Código HTTP (400, 500, etc)
 */
const craftErrorResponseObj = (message, statusCode) => {
    if(!statusCode) statusCode = 500;
    if(!message) message = '';
    return { msg: message, statusCode: statusCode };
}

module.exports = {
    craftOkResponseObj: craftOkResponseObj,
    craftErrorResponseObj: craftErrorResponseObj
}