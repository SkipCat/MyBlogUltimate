import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';

dotenv.config();

const { DB, HOST, PROJECT, PORT } = process.env;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.use(function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
  });
}

mongoose.connect(
  `${DB}://${HOST}/${PROJECT}`, { useNewUrlParser: true }
).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

app.use('/', require('./routes/user'));
app.use('/article', require('./routes/article'));
app.use('/comment', require('./routes/comment'));
