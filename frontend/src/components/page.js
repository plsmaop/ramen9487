import React, { Component } from 'react';
import HomeMain from './home/main';
import Ranking from './home/ranking';
import LoginPanel from './user/loginPanel';
import Search from './search/search';
import AddForm from './search/addForm/addForm';
import SearchResult from './search/result/result';
import Comment from './search/comment/comment';
import Diary from './user/diary/diary';
import AddRecord from './user/addRecord/addRecord'

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
                    {/* <AddForm/> */}
                    <Diary/>
                </div>
                <div className="page" id="p4">
                    {/* <AddForm/> */}
                    {/* <Comment/> */}
                    {/* <LoginPanel/> */}
                    <AddRecord/>
                </div> 
            </div>
        )
    }
}