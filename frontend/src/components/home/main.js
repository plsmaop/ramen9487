import React, { Component } from 'react';
import './style.css';


export default class HomeMain extends Component{
    render(){
        return(
            <div className="home-main">
                <div className="home-image"></div>
                <div className="banner">
                    <div className="title">No Ramen No Life</div>
                    <div className="content">尋找最好吃的拉麵</div>
                    <div className="content">紀錄你吃過的拉麵</div>
                </div>
            </div>
        )
    }
} 