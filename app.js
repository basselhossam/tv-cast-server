var createError = require('http-errors');
const dotenv = require('dotenv');
var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');

dotenv.config();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
