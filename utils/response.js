'use strict';

/**
 * Servicio para manejar respuestas dinámicas
 * @params :::
 * data --> La data obtenida despues de realizar la lógica
 * code --> Código HTTP (Error o OK)
 */
const craftOkResponseObj = (data, code) => {
    if(!data) data = {};
    return { data: data, statusCode: code };
}

module.exports = {
    craftOkResponseObj: craftOkResponseObj
}