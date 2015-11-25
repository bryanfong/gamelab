var mongoose = require('mongoose');
var User = require('./user');
var Game = require('./game');
var Schema   = mongoose.Schema;

var BookmarkSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  game_id: { type: Schema.Types.ObjectId, ref: 'Game' }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);