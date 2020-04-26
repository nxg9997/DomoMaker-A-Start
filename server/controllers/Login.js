// - renders the login page
const renderLogin = (navs, req, res) => {
  res.render('login', { navlinks: navs, csrfToken: req.csrfToken() });
};

const login = (req, res) => {
  renderLogin([{ text: 'Home', href: '/' }, { text: 'Sign Up', href: '/signup' }], req, res);
};

module.exports.login = login;
