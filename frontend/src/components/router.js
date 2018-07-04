import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import LoginPanel from './user';
import Search from './search';
import AddForm from './search/addForm';
import PageNotFound from './pageNotFound';
import SearchResult from './search/result';
import Diary from './user/diary';
import AddRecord from './user/addRecord';

const Router = () => (
  <div className="all-wrapper">
    <Switch>
      <Route path="/" exact component={Home} refresh="true" />
      <Route path="/search" exact component={Search} refresh="true" />
      <Route path="/diary" exact component={Diary} refresh="true" />
      <Route path="/login" exact component={LoginPanel} refresh="true" />
      <Route path="/addform" exact component={AddForm} refresh="true" />
      <Route path="/addrecord" exact component={AddRecord} refresh="true" />
      <Route path="/ramen/restaurant/:id" exact component={SearchResult} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);
// <div className="login-background"><LoginPanel/></div>
export default Router;
