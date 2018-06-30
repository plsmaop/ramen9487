const dbUrl = process.env.NODE_ENV === 'production' ?
  process.env.MONGODB : 'mongodb://admin:ramen9487@ds125021.mlab.com:25021/ramen';

export default dbUrl;
