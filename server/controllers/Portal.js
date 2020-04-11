
const renderPortal = (navs, req, res) => {
  res.render('portal', { navlinks: navs, csrfToken: req.csrfToken() });
};

const portal = (req, res) => {
  renderPortal([{ text: 'Test', href: '/' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.portal = portal;
