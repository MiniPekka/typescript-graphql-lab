const express = require('express');
const app = express();
const port = 5555;

// Configure environment variables
require('dotenv').config();

// Configure database
require('./config/database')();
require('./config/graphql').configureGraphQL(app);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
