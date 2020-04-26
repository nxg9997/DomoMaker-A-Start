const Account = require('./Account');

// - renders the people page
const renderPeople = (navs, req, res) => {
  Account.getAllUsers((err, usrs) => {
    console.log(usrs[0]);
    const users = [];
    let color = 'white';
    usrs.forEach((element) => {
      users.push({
        name: element.username,
        games: element.games,
        color,
        csrfToken: req.csrfToken(),
      });
      color = color === 'white' ? 'grey' : 'white';
    });
    res.render('people', {
      navlinks: navs, users, csrfToken: req.csrfToken(), premium: req.session.account.premium,
    });
  });
};

const people = (req, res) => {
  // res.render('app', {navlinks:[{text:"Test"},{text:"Sign Up"},{text:"Log In"}]});
  renderPeople([{ text: 'Home', href: '/portal' }, { text: 'Messages', href: '/messages' }, { text: 'Settings', href: '/settings' }, { text: 'Log Out', href: '/logout' }], req, res);
};

module.exports.people = people;
