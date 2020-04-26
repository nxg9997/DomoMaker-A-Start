const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// const _ = require('underscore');

let GameModel = {};

// - creates a game schema
const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  createdData: {
    type: Date,
    default: Date.now,
  },
});

// - returns a game object
GameSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  link: doc.link,
  owner: doc.owner,
});

// - gets a gae by the owner
GameSchema.statics.findByOwner = (owner, callback) => {
  const search = {
    owner,
  };

  return GameModel.find(search).select('name link owner').lean().exec(callback);
};

// gets a game by the game name
GameSchema.statics.findByGame = (game, callback) => {
  const search = {
    name: game,
  };

  return GameModel.find(search).select('name link owner').lean().exec(callback);
};

GameModel = mongoose.model('Game', GameSchema);

module.exports.GameModel = GameModel;
module.exports.GameSchema = GameSchema;
