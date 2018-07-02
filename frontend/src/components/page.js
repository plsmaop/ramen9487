import React, { Component } from 'react';
import HomeMain from './home';
import LoginPanel from './user';
import Search from './search';
import AddForm from './search/addForm/addForm';

export default class Page extends Component{
  render(){
    return(
      <div>
        <div className="page" id="p1">
          <HomeMain/>
        </div>
        <div className="page" id="p2">
          <Search/>
        </div>  
        <div className="page" id="p3">
          {/* <section className="icon fa fa-rocket"><span className="title">Rocket</span></section> */}
          {<LoginPanel/>}
        </div>
        <div className="page" id="p4">
          <AddForm/>
        </div> 
      </div>
    )
  }
}
