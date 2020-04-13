var express = require('express');
var app = express();

const dotenv = require('dotenv').config();

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;