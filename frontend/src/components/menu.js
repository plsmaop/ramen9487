import React, { Component } from 'react';

export default class Menu extends Component{
    render(){
        return(
            <ul id="menu">
                <a href="#t1"><li className="icon" id="home"></li></a>
                <a href="#t2"><li className="icon" id="search"></li></a>
                <a href="#t3"><li className="icon" id="ranking"></li></a>
                <a href="#t4"><li className="icon" id="user"></li></a>
          </ul>
        )
    }

}