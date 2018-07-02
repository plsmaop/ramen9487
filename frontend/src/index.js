import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import { get, post } from './api';

const data = {
  id: '5b388dfb29c55f17accdd9c2',
  scores: {
    food: '4',
    env: '4',
    service: '4',
  },
  author: 'admin',
  time: new Date(),
  content: '店內品項眾多，但每種都很棒，推薦醬油跟魚介豚骨',
  timeStamp: Math.floor(Date.now() / 1000),
};

// post('/ramen/restaurant/5b388dfb29c55f17accdd9c2/review', data);
get('/ramen/restaurant/ramenRestaurantList', { page: 1, number: 8, searchConditions: { keyWord: '鷹流', sortType: 'totalScore' } });

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'),
);
