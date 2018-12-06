import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
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
