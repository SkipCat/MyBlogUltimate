import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import shortid from 'shortid';

const UserSchema = new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  articles: [
    { type: String, ref: 'Article' }
  ],
  comments: [
    { type: String, ref: 'Comment' }
  ],
});

UserSchema.methods.isPasswordCorrect = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      callback(err);
    } else {
      callback(err, isMatch);
    }
  });
}

export default mongoose.model('User', UserSchema);
