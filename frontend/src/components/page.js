import React, { Component } from 'react';
<<<<<<< HEAD
import HomeMain from './home';
import LoginPanel from './user';
import Search from './search';
import AddForm from './search/addForm';

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
=======
import HomeMain from './home/main';
import Ranking from './home/ranking';
import LoginPanel from './user/loginPanel';
import Search from './search/search';
import AddForm from './search/addForm/addForm';
import SearchResult from './search/result/result';
import Comment from './search/comment/comment';

export default class Page extends Component{
    render(){
        return(
            <div>
                <div className="page" id="p1">
                    <HomeMain/>
                    <Ranking/>
                </div>
                <div className="page" id="p2">
                     {/* <Search/> */}
                    <SearchResult/>
                </div>  
                <div className="page" id="p3">
                    {/* <section className="icon fa fa-rocket"><span className="title">Rocket</span></section> */}
                    {/* <LoginPanel/> */}
                    <AddForm/>
                </div>
                <div className="page" id="p4">
                    {/* <AddForm/> */}
                    <Comment/>
                </div> 
            </div>
        )
    }
}
>>>>>>> randy
