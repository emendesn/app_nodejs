const express = require('express');
const bodyParsed = require( 'body-parser');
const app = express();

const rMotorista = require('./motorista');

app.use(bodyParsed.json());
app.use(bodyParsed.urlencoded( {extended: false }));

app.use('/motorista', rMotorista);

module.exports = app;