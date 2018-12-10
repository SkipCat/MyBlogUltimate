import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressValidator from 'express-validator';

const config = dotenv.config();
if (config.error) {
  throw config.error;
}

const { MONGODB_URI, PORT } = process.env;
const port = process.env.PORT
const host = process.env.baseURL

const app = express();

app.set('ip', host)
app.set('port', port)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

app.use('/', require('./routes/user'));
app.use('/article', require('./routes/article'));
app.use('/comment', require('./routes/comment'));
