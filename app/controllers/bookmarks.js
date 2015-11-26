var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/bookmarks', router);
};

router.get('/', function (req, res, next) {
  res.render("bookmarks/index");
});