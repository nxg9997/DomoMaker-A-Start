
const renderHome = (navs, res) => {
  res.render('app', { navlinks: navs });
};

const homePage = (req, res) => {
  // res.render('app', {navlinks:[{text:"Test"},{text:"Sign Up"},{text:"Log In"}]});
  renderHome([{ text: 'Test', href: '/' }, { text: 'Sign Up', href: '/' }, { text: 'Log In', href: '/' }], res);
};

module.exports.homePage = homePage;
