import React, { Component } from 'react';
import './style.css';


export default class Ranking extends Component{
    render(){
        return(
            <div className="ranking-container">
                <div className="ranking-wrapper">
                    <div className="ranking-title">豚骨類</div>
                    <div className="switch">
                        <input type="radio" className="switch-input" name="view" value="week1" id="week1" checked/>
                        <label htmlFor="week1" className="switch-label switch-label-off">評分</label>
                        <input type="radio" className="switch-input" name="view" value="month1" id="month1"/>
                        <label htmlFor="month1" className="switch-label switch-label-on">人氣</label>
                        <span className="switch-selection"></span>
                    </div>

                    <div className="ranking">
                        <div className="ramen">
                            <div className="position">1</div>
                            <div className="color"></div>
                            <div className="name">博多一幸舍</div>
                            <div className="rates">4.7</div>
                        </div>
                        <div className="ramen">
                            <div className="position">2</div>
                            <div className="color"></div>
                            <div className="name">道樂屋台</div>
                            <div className="rates">4.3</div>
                        </div>
                        <div className="ramen">
                            <div className="position">3</div>
                            <div className="color"></div>
                            <div className="name">凪</div>
                            <div className="rates">4.2</div>
                        </div>
                        <div className="ramen">
                            <div className="position">4</div>
                            <div className="color"></div>
                            <div className="name">極匠</div>
                            <div className="rates">3.6</div>
                        </div>
                        <div className="ramen">
                            <div className="position">5</div>
                            <div className="color"></div>
                            <div className="name">豚骨一燈</div>
                            <div className="rates">3.5</div>
                        </div>
                    </div>
                </div>

                <div className="ranking-wrapper">
                    <div className="ranking-title">醬油類</div>
                    <div className="switch">
                        <input type="radio" className="switch-input" name="view" value="week2" id="week2" checked/>
                        <label htmlFor="week2" className="switch-label switch-label-off">評分</label>
                        <input type="radio" className="switch-input" name="view" value="month2" id="month2"/>
                        <label htmlFor="month2" className="switch-label switch-label-on">人氣</label>
                        <span className="switch-selection"></span>
                    </div>
                    <div className="ranking">
                        <div className="ramen">
                            <div className="position">1</div>
                            <div className="color"></div>
                            <div className="name">麵屋一燈</div>
                            <div className="rates">4.9</div>
                        </div>
                        <div className="ramen">
                            <div className="position">2</div>
                            <div className="color"></div>
                            <div className="name">麵屋丈六</div>
                            <div className="rates">4.5</div>
                        </div>
                        <div className="ramen">
                            <div className="position">3</div>
                            <div className="color"></div>
                            <div className="name">蔦</div>
                            <div className="rates">4.1</div>
                        </div>
                        <div className="ramen">
                            <div className="position">4</div>
                            <div className="color"></div>
                            <div className="name">金久右衛門</div>
                            <div className="rates">3.9</div>
                        </div>
                        <div className="ramen">
                            <div className="position">5</div>
                            <div className="color"></div>
                            <div className="name">鷹流東京蘭丸</div>
                            <div className="rates">3.7</div>
                        </div>
                    </div>
                </div>

                 <div className="ranking-wrapper">
                    <div className="ranking-title">豚骨類</div>
                    <div className="switch">
                        <input type="radio" className="switch-input" name="view" value="week3" id="week3" checked/>
                        <label htmlFor="week3" className="switch-label switch-label-off">評分</label>
                        <input type="radio" className="switch-input" name="view" value="month3" id="month3"/>
                        <label htmlFor="month3" className="switch-label switch-label-on">人氣</label>
                        <span className="switch-selection"></span>
                    </div>
                    <div className="ranking">
                        <div className="ramen">
                            <div className="position">1</div>
                            <div className="color"></div>
                            <div className="name">博多一幸舍</div>
                            <div className="rates">4.7</div>
                        </div>
                        <div className="ramen">
                            <div className="position">2</div>
                            <div className="color"></div>
                            <div className="name">道樂屋台</div>
                            <div className="rates">4.3</div>
                        </div>
                        <div className="ramen">
                            <div className="position">3</div>
                            <div className="color"></div>
                            <div className="name">凪</div>
                            <div className="rates">4.2</div>
                        </div>
                        <div className="ramen">
                            <div className="position">4</div>
                            <div className="color"></div>
                            <div className="name">極匠</div>
                            <div className="rates">3.6</div>
                        </div>
                        <div className="ramen">
                            <div className="position">5</div>
                            <div className="color"></div>
                            <div className="name">豚骨一燈</div>
                            <div className="rates">3.5</div>
                        </div>
                    </div>
                </div>

                <div className="ranking-wrapper">
                    <div className="ranking-title">醬油類</div>
                    <div className="switch">
                        <input type="radio" className="switch-input" name="view" value="week4" id="week4" checked/>
                        <label htmlFor="week4" className="switch-label switch-label-off">評分</label>
                        <input type="radio" className="switch-input" name="view" value="month4" id="month4"/>
                        <label htmlFor="month4" className="switch-label switch-label-on">人氣</label>
                        <span className="switch-selection"></span>
                    </div>
                    <div className="ranking">
                        <div className="ramen">
                            <div className="position">1</div>
                            <div className="color"></div>
                            <div className="name">麵屋一燈</div>
                            <div className="rates">4.9</div>
                        </div>
                        <div className="ramen">
                            <div className="position">2</div>
                            <div className="color"></div>
                            <div className="name">麵屋丈六</div>
                            <div className="rates">4.5</div>
                        </div>
                        <div className="ramen">
                            <div className="position">3</div>
                            <div className="color"></div>
                            <div className="name">蔦</div>
                            <div className="rates">4.1</div>
                        </div>
                        <div className="ramen">
                            <div className="position">4</div>
                            <div className="color"></div>
                            <div className="name">金久右衛門</div>
                            <div className="rates">3.9</div>
                        </div>
                        <div className="ramen">
                            <div className="position">5</div>
                            <div className="color"></div>
                            <div className="name">鷹流東京蘭丸</div>
                            <div className="rates">3.7</div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}