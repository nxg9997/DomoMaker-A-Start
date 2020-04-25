const renderSettings = (navs, req, res) => {
        res.render('settings', {
          navlinks: navs,
          csrfToken: req.csrfToken(),
          premium: req.session.account.premium,
        });
    //res.render('messages', { navlinks: navs, csrfToken: req.csrfToken() });
  };
  
  const settings = (req, res) => {
    renderSettings([{ text: 'Home', href: '/' }, { text: 'Messages', href: '/messages' }, { text: 'Log Out', href: '/logout' }], req, res);
  };
  
  module.exports.settings = settings;
  