const Message = require('./Message');

// - renders the messages page
const renderMessages = (navs, req, res) => {
  Message.getByReceiver(req, res, (msgs) => {
    res.render('messages', {
      navlinks: navs,
      csrfToken: req.csrfToken(),
      friends: req.session.account.friends,
      messages: msgs.msgs.reverse(),
      premium: req.session.account.premium,
    });
  });
  // res.render('messages', { navlinks: navs, csrfToken: req.csrfToken() });
};

const messages = (req, res) => {
  renderMessages([{ text: 'Home', href: '/' }, { text: 'People', href: '/people' }, { text: 'Settings', href: '/settings' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.messages = messages;
