import React, { Component } from 'react';
import HomeMain from './home/main';
import Ranking from './home/ranking';

export default class Page extends Component{
    render(){
        return(
            <div>
                <div className="page" id="p1">
                    <HomeMain/>
                    <Ranking/>
                </div>
                <div className="page" id="p2">
                    <section className="icon fa fa-keyboard-o"><span className="title">Type</span></section>
                </div>  
                <div className="page" id="p3">
                    <section className="icon fa fa-rocket"><span className="title">Rocket</span></section>
                </div>
                <div className="page" id="p4">
                    <section className="icon fa fa-dribbble">
                    <span className="title">Dribbble</span>
                    <p className="hint">
                        <a href="https://dribbble.com/albertohartzet" target="_blank">Im ready to play, <span className="hint line-trough">invite me </span> find me</a>
                    </p>
                    <p className="hint">Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
                    </section>
                </div> 
            </div>
        )
    }
}