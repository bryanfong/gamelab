var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Game = require('../../models/game');

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json({message: "Please Login"});
  }
}

router.get('/secret', authenticatedUser, function (req, res, next) {
  res.json({message: "secret"});
});

// game-create
router.post("/games", authenticatedUser, function(req, res){
  var gameParams = req.body.game;
  gameParams.createdBy = req.user._id;

  Game.create(gameParams, function (err, game) {
    if (err) res.json({message : err})
    res.json({game : game})
  });
})

// Game-index
router.get('/games', function(req, res, next){
  Game.find({}, function(err, games){
    if (err) res.json({message : err})
    res.json({games});
  })
});

// Game-show
router.get('/games/:id', function(req, res, next){
  var gameId = req.params.id;

  Game.findById(gameId, function (err,game){
    if (err) res.json({message : err})
    res.json({game : game});
  })
});

// Game-destroy

router.delete('/games/:id', authenticatedUser, function(req, res, next){

  var currentUser = req.user.id;
  var gameId = req.params.id;

  Game.findById(gameId, function (err , game){
    if (err) res.json({message : err})
    if (currentUser !=  game.createdBy) {
      res.json({message: "You are not the creator!"});
    } else {
      // game.findByIdAndRemove(gameId, function(err){
      game.remove(function(err){
      if (err) res.json({message: err})
      res.json({message: "game has been removed"})
      });
    }
  })
})

