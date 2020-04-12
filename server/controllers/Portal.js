const Message = require('./Message');

const renderPortal = (navs, req, res) => {
  console.log(req.session.account);
  // console.log(Message.getByReceiver(req, res));
  Message.getByReceiver(req, res, (msgs) => {
    res.render('portal', {
      navlinks: navs,
      csrfToken: req.csrfToken(),
      username: req.session.account.username,
      friends: req.session.account.friends,
      messages: msgs.msgs,
    });
  });
};

const portal = (req, res) => {
  renderPortal([{ text: 'Home', href: '/' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.portal = portal;
