import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import httpProxy from 'http-proxy';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';

// config
const { serverPort, apiUrl, apiPort } = config;
const backend = express();
const port = process.env.PORT || serverPort;
backend.use(compression());
backend.use(helmet());
backend.use(favicon(path.join(__dirname, 'favicon.ico')));
backend.use(cors({ credentials: true, origin: true }));
backend.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  next();
});

// router
const api = `${apiUrl}:${apiPort}`;
const proxy = httpProxy.createProxyServer({
  target: api,
});

backend.use('/api', (req, res) => proxy.web(req, res, { target: api }));
backend.use('/', connectHistoryApiFallback());

backend.listen(port, (err) => {
  if (err) console.error(err);
  else console.log(`===>open http://localhost:${port}`);
});

if (process.env.NODE_ENV === 'production') {
  backend.use(express.static(path.join(__dirname, 'build')));
}
