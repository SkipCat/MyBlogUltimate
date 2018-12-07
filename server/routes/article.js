import express from 'express';
import dotenv from 'dotenv';

import Article from '../models/Article.model';

const articleRouter = express.Router();

const config = dotenv.config();
if (config.error) {
  throw config.error;
}

articleRouter.post('/create', (req, res) => {
  const { title, content, author, dateCreated, dateUpdated } = req.body;

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
  Article.create({ title, content, dateCreated, dateUpdated, author }).then(
    () => res.status(200).json({ response: 'Article sucessfully created!' })
  ).catch(
    err => res.status(500).json({ error: err.message })
  );
});

module.exports = articleRouter;
