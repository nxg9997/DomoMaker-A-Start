const models = require('../models');

const { Message } = models;

const makeMsg = (req, res) => {
    if (!req.body.text || !req.body.to) {
        return res.status(400).json({ error: 'No message was sent!' });
      }
    
      const msgData = {
        from: req.session.account.username,
        to: req.body.to,
        text: req.body.text,
      };
    
      const newMsg = new Message.MessageModel(msgData);
    
      const msgPromise = newMsg.save();
    
      msgPromise.then(() => res.json({ redirect: '/portal' }));
    
      msgPromise.catch((err) => {
        console.log(err);
    
        return res.status(400).json({ error: 'An error has occurred' });
      });
    
      return msgPromise;
};

// (result: {}) => {}
const getMsgByReceiver = (request, response, callback) => {
    const req = request;
    const res = response;
  
    Message.MessageModel.findByReceiver(req.session.account.username, (err, docs) => {
      if (err) {
        console.log(err);
        callback({ error: 'An error has occurred' });
        return;
      }

      console.log(docs);
  
      callback({ msgs: docs });
    });
};

const getMsgBySender = (request, response, callback) => {
    const req = request;
    const res = response;
  
    return Message.MessageModel.findBySender(req.session.account.username, (err, docs) => {
      if (err) {
        console.log(err);
        return { error: 'An error has occurred' };
      }
  
      return { msgs: docs };
    });
};

module.exports.make = makeMsg;
module.exports.getByReceiver = getMsgByReceiver;
module.exports.getBySender = getMsgBySender;