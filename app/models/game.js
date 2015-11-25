var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var GameSchema = new Schema({
    title:     { type: String },
    category:    { type: String },
    description: { type: String },
    screenshot: { type: String },
    url: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Game', GameSchema);