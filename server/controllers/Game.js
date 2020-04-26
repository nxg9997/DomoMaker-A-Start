const models = require('../models');

const { Game } = models;
// const { Account } = models;

// - adds a game that is connected to the current user
const makeGame = (req, res) => {
  if (!req.body.name || !req.body.link) {
    return res.status(400).json({ error: 'Error adding game!' });
  }

  const gameData = {
    owner: req.session.account.username,
    name: req.body.name,
    link: req.body.link,
  };

  const newGame = new Game.GameModel(gameData);

  const gamePromise = newGame.save();

  gamePromise.then(() => res.json({ redirect: '/portal' }));

  gamePromise.catch((err2) => {
    console.log(err2);

    return res.status(400).json({ error: 'An error has occurred' });
  });

  return gamePromise;
};

// - returns all the games that are owned by a specified user
const getGameByOwner = (request, response, callback) => {
  const req = request;
  // const res = response;

  Game.GameModel.findByOwner(req.session.account.username, (err, docs) => {
    if (err) {
      console.log(err);
      callback({ error: 'An error has occurred' });
      return;
    }

    console.log(docs);

    callback({ games: docs });
  });
};

// - gets all games based on the game title
const getGameByName = (request, response, callback) => {
  const req = request;
  // const res = response;

  Game.GameModel.findByName(req.body.name, (err, docs) => {
    if (err) {
      console.log(err);
      callback({ error: 'An error has occurred' });
      return;
    }

    callback({ games: docs });
  });
};

module.exports.make = makeGame;
module.exports.getByOwner = getGameByOwner;
module.exports.getByName = getGameByName;
