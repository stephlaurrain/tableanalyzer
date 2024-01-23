// Import dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Routes
const taRoutes = require('./routes/tableanalyzer');
const log = require('./utils/winston');

// App
const app = express();

log.info("demarrage");

// CORS
app.use(cors({ origin: '*' }));

// Parser
app.use(express.json());

// Routes
app.use('/', taRoutes);

// Export app
module.exports = app;
