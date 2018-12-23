const mongoose = require('mongoose');

const URI = `mongodb://${process.env.DB_USER}:${
  process.env.DB_PASSWORD
}@ds141924.mlab.com:41924/dataloader`;

function initializeDatabase() {
  return mongoose
    .connect(
      URI,
      { useNewUrlParser: true },
    )
    .then(() => {
      console.log('Database connection succeed!');
    })
    .catch(err => {
      console.error('Database connection failed: ', err);
    });
}

module.exports = initializeDatabase;
