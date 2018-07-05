export default {
  dbUrl: process.env.NODE_ENV === 'production'
    ? process.env.MONGODB : 'mongodb://admin:ramen9487@ds125021.mlab.com:25021/ramen',
  serverPort: 3001,
  apiUrl: process.env.NODE_ENV === 'production'
    ? process.env.API : 'http://localhost',
  apiPort: 3002,
};
