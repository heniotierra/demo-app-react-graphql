'use strict';

const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const { schema, root } = require('./graphql-schema');

const mainRouter = express.Router();

// App
const app = express();

// GET index route
mainRouter.get('/', (req, res) => {
  res.json({ status: 'It\'s alive!' });
});

app.use(cors());

app.use('/', mainRouter);

// Graphql endpoint
app.use('/graphql', graphqlHTTP({
  rootValue: root,
  schema: schema,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.status(500).json({ message: err.message });
});

app.stream = {
  listeners: app.listeners
};

module.exports = app;