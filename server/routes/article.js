import express from 'express';
import dotenv from 'dotenv';

import Article from '../models/Article.model';
import User from '../models/User.model';
import Comment from '../models/Comment.model';

const articleRouter = express.Router();

dotenv.config();

articleRouter.post('/create', (req, res) => {
  const { title, content, author } = req.body;

  // Check user role - restricted action
  User.findById(author).then(user => {
    if (user.role === 'USER') {
      res.status(403).json({ response: 'Forbidden. You do not have permission.' });
    } else {
      // Check for invalid inputs
      req.checkBody('title', 'Title is required').notEmpty();
      req.checkBody('content', 'Content is required').notEmpty();

      const errors = req.validationErrors();
      if (errors) {
        let errorMsg = ''
        errors.forEach(error => { errorMsg += `${error.msg}. ` });
        return res.status(400).json({ error: errorMsg });
      }

      // If everything OK we insert new article in database
      Article.create({ title, content, author }).then((article) => {
        User.findOneAndUpdate(
          { _id: author },
          { $addToSet: { articles: article._id } },
          (err, _) => {
            if (err) return err => res.status(500).json({ error: err.message });
          }
        );
        res.status(200).json({ response: 'Article sucessfully created!' })
      }).catch(
        err => res.status(500).json({ error: err.message })
      );
    }
  }).catch(error => res.status(500).json({ error: error.message }));
});

articleRouter.get('/all', (req, res) => {
  Article.find().populate('author').exec().then(articles => {
    res.status(200).json({ response: articles })
  }).catch(error => res.status(500).json({ error: error.message }));
});

articleRouter.get('/:id', (req, res) => {
  Article.findById(req.params.id).populate('author comments').exec().then(article => {
    res.status(200).json({ response: article })
  }).catch(error => res.status(500).json({ error: error.message }));
});

articleRouter.put('/edit/:id', (req, res) => {
  const { userId, _id } = req.body;

  // Check user role - restricted action
  User.findById(userId).then(user => {
    if (user.role === 'USER') {
      res.status(403).json({ response: { message: 'Forbidden. You do not have permission.' } });
    } else {
      let fieldsToUpdate = {};
      for (const data in req.body) {
        if (req.body[data] !== '' && data !== '_id') {
          fieldsToUpdate[data] = req.body[data];
        }
      }
    
      Article.findByIdAndUpdate(_id, { $set: fieldsToUpdate }, (err, _) => {
        if (err) return res.status(500).json({ error: err.message });
      }).then((article) => res.status(200).json({ 
          response: { message: 'Article successfully updated!', article }
        })
      ).catch(error => res.status(500).json({ error: error.message }));
    }
  }).catch(error => res.status(500).json({ error: error.message }));
});

articleRouter.delete('/delete/:id', (req, res) => {
  const _id = req.params.id;

  User.findById(req.body.userId).then(user => {
    if (user.role === 'SUPERADMIN') {
      Article.findById(_id).then(article => {
        // Remove from author articles list
        User.findOneAndUpdate(
          { _id: article.author },
          { $pull: { articles: _id } },
          (err, _) => {
            if (err) return res.status(500).json({ error: err.message });
          }
        );
      }).then(() => {
        // Delete all comments of the article
        Comment.deleteMany({ article: _id }, (err, result) => {
          if (err) return res.status(500).json({ error: err.message });
        });
      }).then(() => {
        Article.deleteOne({ _id }, (err, result) => {
          if (err) return res.status(500).json({ error: err.message });
          if (result) {
            return res.status(200).json({ response: 'Suppression succeeded!'})
          }
        });
      });
    } else {
      res.status(403).json({ response: 'Forbidden. You do not have permission.' });
    }
  }).catch(error => res.status(500).json({ error: error.message }));
});

module.exports = articleRouter;
