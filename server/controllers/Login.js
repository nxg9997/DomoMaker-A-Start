const renderLogin = (navs, req, res) => {
  res.render('Login', { navlinks: navs, csrfToken: req.csrfToken() });
};

const login = (req, res) => {
  renderLogin([{ text: 'Home', href: '/' }, { text: 'Sign Up', href: '/signup' }], req, res);
};

module.exports.login = login;
