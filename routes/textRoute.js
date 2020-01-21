'use strict'

const express = require('express');
const TextController = require('../controllers/textController');
const api = express.Router();

api.post('/text', TextController.returnText);

module.exports = api;