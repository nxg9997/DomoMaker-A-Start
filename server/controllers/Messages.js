const Message = require('./Message');

const renderMessages = (navs, req, res) => {
    Message.getByReceiver(req, res, (msgs) => {
        res.render('messages', {
          navlinks: navs,
          csrfToken: req.csrfToken(),
          friends: req.session.account.friends,
          messages: msgs.msgs.reverse(),
        });
      });
    //res.render('messages', { navlinks: navs, csrfToken: req.csrfToken() });
  };
  
  const messages = (req, res) => {
    renderMessages([{ text: 'Home', href: '/' }, { text: 'Log Out', href: '/logout' }], req, res);
  };
  
  module.exports.messages = messages;
  