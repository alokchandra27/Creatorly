const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');


const app = express();
app.use(express.json());

connectDB();

module.exports = app;