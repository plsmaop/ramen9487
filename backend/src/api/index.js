import express from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';
import httpProxy from 'http-proxy';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import config from '../config';
import user from './user';
import ramen from './ramen';

// config
const { dbUrl, apiPort } = config;
const backend = express();
const port = process.env.PORT || apiPort;
backend.use(compression());
backend.use(cors({ credentials: true, origin: true }));
backend.use(bodyParser.urlencoded({ xtended: false }));
backend.use(cookieParser('i_am_lazyeeeee'));
backend.use(session({
  secret: 'i_am_lazyeeeee',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 1000 * 60,
    secure: false,
    httpOnly: false,
  },
}));

backend.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  next();
});

// data base
mongoose.Promise = bluebird;
mongoose.connect(dbUrl, (err) => {
  if (err) {
    console.log(err, 'failde to connect to db');
    return;
  }
  console.log('connect to db successfully');
  backend.listen(port, (error) => {
    if (error) {
      console.error('err:', error);
    } else {
      console.info(`===> api server is running on ${port}`);
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  backend.use(express.static(path.join(__dirname, 'build')));
}

const router = express.Router();
router.use('/user', user);
router.use('/ramen', ramen);
backend.use(router);
