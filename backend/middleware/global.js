const express = require('express');
const cors = require('cors');

// create the json middleware
const jsonMiddleware = express.json();

// create the cors middleware
const corsMiddleware = cors();

module.exports = {
  jsonMiddleware,
  corsMiddleware,
};