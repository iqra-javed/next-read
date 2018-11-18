const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connect to mlab database
mongoose.connect(
  `mongodb://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@ds211724.mlab.com:11724/next-read`,
  { useNewUrlParser: true } // useNewUrlParser being used due to deprecation warning in console
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    // middleware
    schema, // ES6 equivalent of schema: schema
    graphiql: true // graphiql is similar to postman
  })
);

app.listen(4000, () => {
  console.log('now listenting for requests on port 4000');
});
