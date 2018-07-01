import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import { get, post } from './api';

const data = {
  id: '5b38d95ceaf2a4308c19f6cc',
  food: '5',
  env: '4',
  service: '3.5',
  author: 'admin',
  time: new Date(),
  content: '我最喜歡家系了，家系最高，如果有豆瓣醬跟蒜泥可以加就完美了',
  timeStamp: Math.floor(Date.now() / 1000),
};

post('/ramen/restaurant/5b38d95ceaf2a4308c19f6cc/review', data);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'),
);
