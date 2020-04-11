
const renderPortal = (navs, req, res) => {
  console.log(req.session.account);
  res.render('portal', { navlinks: navs, csrfToken: req.csrfToken(), username:req.session.account.username, friends: req.session.account.friends, messages: req.session.account.messages });
};

const portal = (req, res) => {
  renderPortal([{ text: 'Home', href: '/' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.portal = portal;
