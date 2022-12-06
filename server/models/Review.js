import mongoose from 'mongoose';
import User from './User.js';

const ReviewSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Review = mongoose.model('Review', ReviewSchema);
export default Review;
