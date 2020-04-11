
const renderHome = (navs, res) => {
  res.render('app', { navlinks: navs });
};

const homePage = (req, res) => {
  // res.render('app', {navlinks:[{text:"Test"},{text:"Sign Up"},{text:"Log In"}]});
  renderHome([{ text: 'Test', href: '/' }, { text: 'Sign Up', href: '/signup' }, { text: 'Log In', href: '/login' }], res);
};

module.exports.homePage = homePage;
