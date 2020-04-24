const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// const _ = require('underscore');

let GameModel = {};

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

GameSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  link: doc.link,
  owner: doc.owner,
});

GameSchema.statics.findByOwner = (owner, callback) => {
  const search = {
    owner: owner,
  };

  return GameModel.find(search).select('name link owner').lean().exec(callback);
};

GameSchema.statics.findByGame = (game, callback) => {
  const search = {
    name: game,
  };

  return GameModel.find(search).select('name link owner').lean().exec(callback);
};

GameModel = mongoose.model('Game', GameSchema);

module.exports.GameModel = GameModel;
module.exports.GameSchema = GameSchema;
