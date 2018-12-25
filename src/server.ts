// const express = require('express');
// const mongoose = require('mongoose');
import * as express from 'express';
import * as mongoose from 'mongoose';

const app = express();
const port = 5555;

// To remove warning from mongoose
mongoose.set('useFindAndModify', false);

// Configure environment variables
require('dotenv').config();

// Configure database
require('./config/database')();
require('./config/graphql').configureGraphQL(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
