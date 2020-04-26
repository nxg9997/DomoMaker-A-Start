// - renders the home page
const renderHome = (navs, req, res) => {
  res.render('app', { navlinks: navs });
};

const homePage = (req, res) => {
  // res.render('app', {navlinks:[{text:"Test"},{text:"Sign Up"},{text:"Log In"}]});
  renderHome([{ text: 'Sign Up', href: '/signup' }, { text: 'Log In', href: '/login' }], req, res);
};

module.exports.homePage = homePage;
