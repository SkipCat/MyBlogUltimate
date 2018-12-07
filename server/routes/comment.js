import express from 'express';
import dotenv from 'dotenv';

import Comment from '../models/Comment.model';
import Article from '../models/Article.model';
import User from '../models/User.model';

const commentRouter = express.Router();

const config = dotenv.config();
if (config.error) {
  throw config.error;
}

commentRouter.post('/create', (req, res) => {
  const { content, author, article } = req.body;

  // Check for invalid inputs
  req.checkBody('content', 'Content is required').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    let errorMsg = ''
    errors.forEach(error => { errorMsg += `${error.msg}. ` });
    return res.status(400).json({ error: errorMsg });
  }

  // If everything OK we insert new article in database
  Comment.create({ content, author, article }).then((comment) => {
    Article.findOneAndUpdate(
      { _id: article },
      { $push: { comments: comment._id } },
      (err, _) => {
        if (err) return res.status(500).json({ error: err.message });
      }
    );
    User.findOneAndUpdate(
      { _id: author },
      { $push: { comments: comment._id } },
      (err, _) => {
        if (err) return res.status(500).json({ error: err.message });
      }
    );
    res.status(200).json({ response: 'Comment sucessfully created!' })
  }).catch(
    err => res.status(500).json({ error: err.message })
  );

});

commentRouter.delete('/delete/:id', (req, res) => {
  const commentId = req.params.id;

  Comment.findById(commentId).then(comment => {
    Article.findOneAndUpdate(
      { _id: comment.article },
      { $pull: { comments: commentId } },
      (err, _) => {
        if (err) return res.status(500).json({ error: err.message });
      }
    );
    User.findOneAndUpdate(
      { _id: comment.author },
      { $pull: { comments: commentId } },
      (err, _) => {
        if (err) return res.status(500).json({ error: err.message });
      }
    );
  }).then(() => {
    Comment.deleteOne({ _id: commentId }, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result) {
        return res.status(200).json({ response: 'Suppression succeeded!'})
      }
    });
  }).catch(error => res.status(500).json({ error: error.message }));

});

module.exports = commentRouter;
