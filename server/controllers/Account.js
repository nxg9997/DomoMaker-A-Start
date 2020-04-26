const models = require('../models');

const { Account } = models;

// - renders the login page
const loginPage = (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
};

// - ogs the current user out
const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

// - logs the user in
const login = (request, response) => {
  const req = request;
  const res = response;

  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({ redirect: '/portal' });
  });
};

// - creates a new user
const signup = (request, response) => {
  const req = request;
  const res = response;

  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
    const accountData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    const newAccount = new Account.AccountModel(accountData);

    const savePromise = newAccount.save();

    savePromise.then(() => {
      req.session.account = Account.AccountModel.toAPI(newAccount);


      return res.json({ redirect: '/portal' });
    });

    savePromise.catch((err) => {
      console.log(err);

      if (err.code === 11000) {
        return res.status(400).json({ error: 'Username already in use.' });
      }

      return res.status(400).json({ error: 'An error has occurred' });
    });
  });
};

// - changes the password for the logged in user
const changePassword = (request, response) => {
  const req = request;
  const res = response;

  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;
  req.body.newPass = `${req.body.newPass}`;

  if (!req.body.pass || !req.body.pass2 || !req.body.newPass) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  return Account.AccountModel.generateHash(req.body.newPass, (salt, hash) => {
    const filter = {
      _id: req.session.account._id,
    };

    const update = {
      $set: { password: hash, salt },
    };

    return Account.AccountModel.updateOne(filter, update, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: 'An error has occurred' });
      }

      return res.json({ redirect: '/portal' });
    });
  });
};

// - gets the current csrf token
const getToken = (request, response) => {
  const req = request;
  const res = response;

  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };

  res.json(csrfJSON);
};

// - toggles premium on/off for the current user
// - (this would require a buy-in if the app was going to be in full production)
const setPremium = (request, response) => {
  const req = request;
  const res = response;

  const filter = {
    _id: req.session.account._id,
  };

  const update = {
    $set: { premium: !req.session.account.premium },
  };

  return Account.AccountModel.updateOne(filter, update, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error has occurred' });
    }

    return Account.AccountModel.findOne(filter, (err2, doc) => {
      if (err2) {
        console.log(err2);
        return res.status(400).json({ error: 'An error has occurred' });
      }

      req.session.account.premium = doc.premium;
      return res.json({ redirect: '/portal' });
    });
  });
};

// - Adds a new friend to the current user, and updates the page to reflect the change
const addFriend = (request, response) => {
  const req = request;
  const res = response;

  if (req.session.account.friends.length >= 5 && !req.session.account.premium) {
    console.log(`${req.session.account.username} is not premium`);
    return res.status(400).json({ error: 'Account is not premium, max friends is 5' });
  }

  const filter = {
    _id: req.session.account._id,
  };

  // let currFriends = req.session.friends || [];
  // currFriends.push({name:req.body.username})
  const update = {
    $push: { friends: { name: req.body.username } },
  };

  return Account.AccountModel.updateOne(filter, update, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error has occurred' });
    }

    return Account.AccountModel.findOne(filter, (err2, doc) => {
      if (err2) {
        console.log(err2);
        return res.status(400).json({ error: 'An error has occurred' });
      }

      req.session.account.friends = doc.friends;
      return res.json({ redirect: '/portal' });
    });
  });
};

// - Adds a new game to the current user, and updates the page to reflect the change
const addGame = (request, response) => {
  const req = request;
  const res = response;

  const filter = {
    _id: req.session.account._id,
  };


  const update = {
    $push: { games: { name: req.body.name, link: req.body.link } },
  };

  return Account.AccountModel.updateOne(filter, update, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error has occurred' });
    }

    return Account.AccountModel.findOne(filter, (err2, doc) => {
      if (err2) {
        console.log(err2);
        return res.status(400).json({ error: 'An error has occurred' });
      }

      req.session.account.games = doc.games;
      return res.json({ redirect: '/portal' });
    });
  });
};

// - returns an array of all the users that have accounts
const getAllUsers = (callback) => {
  Account.AccountModel.getAllUsers(callback);
};


module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signup = signup;
module.exports.getToken = getToken;
module.exports.addFriend = addFriend;
module.exports.addGame = addGame;
module.exports.changePassword = changePassword;
module.exports.setPremium = setPremium;
module.exports.getAllUsers = getAllUsers;
