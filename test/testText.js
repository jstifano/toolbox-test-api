'use strict';

const app = require('../server');
const request = require('supertest');

describe('POST /api/text', () => {
    // Prueba para caso exitoso
    it('Responde el texto enviado desde el cliente correctamente', (done) => {
        request(app)
        .post('/api/text')
        .send({text: 'Hola javier'})
        .expect(200, {
            data: 'Hola javier',
            statusCode: 200
        }, done)
    });

    // Prueba para caso si no se envía el texto
    it('El texto viene vacío, null o undefined.', (done) => {
        request(app)
        .post('/api/text')
        .send({text: null})
        .expect(400, {
            msg: 'Texto no enviado',
            statusCode: 400
        }, done)
    });

    // Prueba para caso si se envían valores que no sean solo letras.
    it('El texto viene con caracteres especial o erroneos.', (done) => {
        request(app)
        .post('/api/text')
        .send({text: 'kjqw__#-?'})
        .expect(400, {
            msg: 'Paramátro inválido',
            statusCode: 400
        }, done)
    });
})

