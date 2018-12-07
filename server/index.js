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

const { DB, HOST, PROJECT, PORT } = process.env;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'src/build')));

mongoose.connect(
  `${DB}://${HOST}/${PROJECT}`, { useNewUrlParser: true }
).then(() => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

app.use('/', require('./routes/user'));
app.use('/article', require('./routes/article'));
