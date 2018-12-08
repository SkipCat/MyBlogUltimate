import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/User.model';

const userRouter = express.Router();

const config = dotenv.config();
if (config.error) {
  throw config.error;
}

userRouter.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check for invalid inputs
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    let errorMsg = ''
    errors.forEach(error => { errorMsg += `${error.msg}. ` });
    return res.status(400).json({ error: errorMsg });
  }

  // Check for user with same username
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Internal error please try again' });
    } else if (user && user.username === username) {
      return res.status(400).json({ error: 'This username is already used, please choose another one.' });
    }
  });

  // If everything OK we insert new user in database
  User.create({
    username: username,
    password: bcrypt.hashSync(password, 8)
  }).then(
    () => res.status(200).json({ response: 'User sucessfully registered!' })
  ).catch(
    err => res.status(500).json({ error: err.message })
  );
});

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal error please try again' });
    } else if (!user) {
      return res.status(401).json({ error: 'Incorrect username' });
    } else {
      user.isPasswordCorrect(password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ error: 'Internal error please try again' });
        } else if (!isMatch) {
          return res.status(401).json({ error: 'Incorrect password' });
        } else {
          const token = jwt.sign(
            { username, _id: user._id },
            process.env.SECRET,
            { expiresIn: '3h' }
          );

          return res.status(200).json({
            token: token,
            username: username,
            _id: user._id,
            role: user.role
          });
        }
      });
    }
  }).catch((err) => res.status(500).json({ error: err }));
});

userRouter.get('/profile/:id', (req, res) => {
  User.findById(req.params.id).populate('articles comments').exec().then(user => {
    res.status(200).json({ response: user })
  }).catch(error => res.status(500).json({ error: error.message }));
})

userRouter.post('/profile/edit', (req, res) => {
  let fieldsToUpdate = {};

  for (const data in req.body) {
    if (req.body[data] !== '' && data !== '_id') {
      if (data === 'password') {
        fieldsToUpdate[data] = bcrypt.hashSync(req.body[data], 8);
      } else {
        fieldsToUpdate[data] = req.body[data];
      }
    }
  }

  User.findByIdAndUpdate(req.body._id, { $set: fieldsToUpdate }, (err, _) => {
    if (err) return res.status(500).json({ error: err.message });
  }).then((user) => {
    return res.status(200).json({ response: user });
  }).catch(error => res.status(500).json({ error: error.message }));
})

module.exports = userRouter;
