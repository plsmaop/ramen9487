import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import LoginPanel from './user';
import Search from './search';
import AddForm from './search/addForm';
import PageNotFound from './pageNotFound';
import SearchResult from './search/result';
import Diary from './user/diary';

const Router = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={() => <div className="search-background"><Search /></div>} />
      <Route path="/diary" exact component={Diary} />
      <Route path="/login" exact component={() => <div className="login-background"><LoginPanel /></div>} />
      <Route path="/addform" exact component={() => <div className="addform-background"><AddForm /></div>} />
      <Route path="/ramen/restaurant/:id" exact component={SearchResult} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);
// <div className="login-background"><LoginPanel/></div>
export default Router;
