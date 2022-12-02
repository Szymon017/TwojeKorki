import mongoose from 'mongoose';
import User from './User.js';

const MessageSchema = mongoose.Schema({
  userA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  userB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  }],
  
});

const Message = mongoose.model('Message', MessageSchema);
export default Message;
