import React, { Component } from 'react';
import HomeMain from './home/main';
import Ranking from './home/ranking';
import LoginPanel from './user/loginPanel';
import AddForm from './search/addForm';

export default class Page extends Component{
    render(){
        return(
            <div>
                <div className="page" id="p1">
                    <HomeMain/>
                    <Ranking/>
                </div>
                <div className="page" id="p2">
                    <AddForm/>
                </div>  
                <div className="page" id="p3">
                    <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
                </div>
                <div className="page" id="p4">
                    {/* <LoginPanel/> */}
                </div> 
            </div>
        )
    }
}