const renderSignup = (navs, req, res) => {
  res.render('Signup', { navlinks: navs, csrfToken: req.csrfToken() });
};

const signup = (req, res) => {
  renderSignup([{ text: 'Home', href: '/' }, { text: 'Log In', href: '/login' }], req, res);
};

module.exports.signup = signup;
