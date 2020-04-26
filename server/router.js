const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Login.login);
  // app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Signup.signup);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/portal', mid.requiresLogin, controllers.Portal.portal);
  app.get('/messages', mid.requiresLogin, controllers.Messages.messages);
  app.get('/settings', mid.requiresLogin, controllers.Settings.settings);
  // app.post('/maker', mid.requiresLogin, controllers.Domo.make);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Home.homePage);
  app.get('/people', mid.requiresLogin, controllers.People.people);

  app.post('/addFriend', mid.requiresSecure, mid.requiresLogin, controllers.Account.addFriend);
  app.post('/addGame', mid.requiresSecure, mid.requiresLogin, controllers.Game.make);
  app.post('/sendMsg', mid.requiresSecure, mid.requiresLogin, controllers.Message.make);
  app.post('/changePassword', mid.requiresSecure, mid.requiresLogin, controllers.Account.changePassword);
  app.get('/premium', mid.requiresSecure, mid.requiresLogin, controllers.Account.setPremium);

  // app.post('/domodel', mid.requiresSecure, controllers.Domo.domoDel);
};

module.exports = router;
