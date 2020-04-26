const Message = require('./Message');
const Game = require('./Game');

// - renders the main account portal page
const renderPortal = (navs, req, res) => {
  console.log(req.session.account);
  // console.log(Message.getByReceiver(req, res));
  Message.getByReceiver(req, res, (msgs) => {
    Game.getByOwner(req, res, (games) => {
      res.render('portal', {
        navlinks: navs,
        csrfToken: req.csrfToken(),
        username: req.session.account.username,
        friends: req.session.account.friends,
        messages: msgs.msgs,
        games: games.games,
        premium: req.session.account.premium,
      });
    });
  });
};

const portal = (req, res) => {
  renderPortal([{ text: 'Home', href: '/' }, { text: 'Messages', href: '/messages' }, { text: 'People', href: '/people' }, { text: 'Settings', href: '/settings' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.portal = portal;
