import mongoose from 'mongoose';
import shortid from 'shortid';

const ArticleSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  title: { type: String, required: true },
  content: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now, required: true },
  dateUpdated: { type: Date, default: Date.now, required: true },
  author: { type: String, ref: 'User', required: true }
});

export default mongoose.model('Article', ArticleSchema);
