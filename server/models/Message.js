const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// const _ = require('underscore');

let MessageModel = {};

// - creates a message schema
const MessageSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    trim: true,
  },
  to: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdData: {
    type: Date,
    default: Date.now,
  },
});

// - returns a message object
MessageSchema.statics.toAPI = (doc) => ({
  from: doc.from,
  to: doc.to,
  text: doc.text,
  date: doc.createdData,
});

// - gets a message object by the sender
MessageSchema.statics.findBySender = (sender, callback) => {
  const search = {
    from: sender,
  };

  return MessageModel.find(search).select('from to text').lean().exec(callback);
};

// - gets a message object by the reciever
MessageSchema.statics.findByReceiver = (receiver, callback) => {
  const search = {
    to: receiver,
  };

  return MessageModel.find(search).select('from to text').lean().exec(callback);
};

MessageModel = mongoose.model('Message', MessageSchema);

module.exports.MessageModel = MessageModel;
module.exports.MessageSchema = MessageSchema;
