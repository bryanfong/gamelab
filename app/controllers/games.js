var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/games', router);
};

router.get('/', function (req, res, next) {
  res.render("games/index");
});

router.get('/new', function (req, res, next) {
  res.render("games/new");
});

router.get('/:id', function (req, res, next) {
  res.render("games/show");
});



