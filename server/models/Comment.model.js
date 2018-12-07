import mongoose from 'mongoose';
import shortid from 'shortid';

const CommentSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  content: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now, required: true },
  author: { type: String, ref: 'User', required: true },
  article: { type: String, ref: 'Article', required: true }
});

export default mongoose.model('Comment', CommentSchema);
