import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';

import User from './models/User.model';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'src/build')));

const port = process.env.PORT || 5000;

mongoose.connect(
  'mongodb://localhost/my-blog-ultimate', { useNewUrlParser: true }
).then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = {
    username: username,
    password: bcrypt.hashSync(password, 8)
  };

  User.create(newUser).then(
    () => res.status(200).send({ message: 'User sucessfully registered!' })
  ).catch(
    err => res.status(500).send({ message: err.message })
  );
});
