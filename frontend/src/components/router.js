import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import LoginPanel from './user/loginPanel';
import Search from './search';
import AddForm from './search/addForm/addForm';
import PageNotFound from './pageNotFound';

const Router = () => (
  <div className="page">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginPanel} />
      <Route path="/search" exact component={Search} />
      <Route path="/addform" exact component={AddForm} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default Router;
