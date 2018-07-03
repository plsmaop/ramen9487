import React, { Component } from 'react';
import './style.css';
import Map from './googlemap';

export default class SearchResult extends Component {
  constructor(props){
    super(props);

    this.state={
      like: "heart"
    }

    this.toggleHeartClass = this.toggleHeartClass.bind(this)
  }

  toggleHeartClass(){
    if(this.state.like === undefined) this.setState({"like": "heart"})
    let like_button_class = (this.state.like === "heart") ? "heart-clicked":"heart";
    this.setState({like: like_button_class})
  }

  render(){
    return(
      <div className="result-wrapper">

        <div className="result-block result-summary">
          <div className="result-summaryCard">
            
            <div className="result-color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">Tsuta Taiwan</h1>
                </div>
                <p className="store-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">3.8</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">11</div></h5>
                </p>

                <div className="summary-footer">
                  <div ref="like-button" className={this.state.like} onClick={this.toggleHeartClass}>♥</div>
                </div>

              </div>
            </div>
          </div>
          <img  src="https://2.bp.blogspot.com/-9i4Qmtjlq4c/We8IWmECzcI/AAAAAAAAbrQ/PYMDXo9loH8OOVYvpB3eTws8yXTnR8hXwCLcBGAs/s1600/IMG_3337.JPG"/>
        </div>

        <div className="result-block result-sidebar">
          <div className="result-basic">

            <div className="icon-info-wrap">
              <div className="result-icon location"></div>
              <div className="result-ans">台北市忠孝西路1段36號</div>
            </div>

            <div className="icon-info-wrap">
              <div className="result-icon phone"></div>
              <div className="result-ans">02 2370 3978</div>
            </div>

            <div className="icon-info-wrap">
              <div className="result-icon web"></div>
              <div className="result-ans web-ans">https://www.facebook.com/tsutataiwan</div>
            </div>

            <div className="icon-info-wrap wrap-menu">
              <div className="result-icon result-menu"></div>
              <div className="result-ans ">
                <article>
                  <div className="menu-title">
                    <span>叉燒味玉醬油拉麵</span>
                    <span className="menu-price">$385</span>
                  </div>
                  <div className="menu-title">
                    <span>叉燒味玉鹽味拉麵</span>
                    <span className="menu-price">$360</span>
                  </div>
                  <div className="menu-title">
                    <span>秘味噌拉麵</span>
                    <span className="menu-price">$330</span>
                  </div>
                  <div className="menu-title">
                    <span>燒烤梅花丼</span>
                    <span className="menu-price">$100</span>
                  </div>
                  <div className="menu-title">
                    <span>秘味噌胡麻拌麵</span>
                    <span className="menu-price">$300</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="icon-info-wrap">
              <div className="result-icon open-hours"></div>
              <div className="result-ans open-hours-ans">11:00 - 22:00</div>
              <ul className="result-all-open-hours">
                <li>
                  <div className="result-day">Mon</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Tue</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Wed</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Thu</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Fri</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Sat</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Sun</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>
              </ul >
            </div> 

            <div className="icon-info-wrap wrap-tags">
              <div className="result-icon near-mrt"></div>
             
                <ul className="tags">
                  <li><div className="tag">象山</div></li>
                  <li><div className="tag">國父紀念館</div></li>
                  <li><div className="tag">南港軟體園區</div></li>
                  <li><div className="tag">中正紀念堂</div></li>
                </ul>
              
            </div>

            <div className="icon-info-wrap wrap-tags">
              <div className="result-icon category"></div>
              
                <ul className="tags">
                  <li><div className="tag">豚骨</div></li>
                  <li><div className="tag">醬油</div></li>
                  <li><div className="tag">沾麵</div></li>
                  <li><div className="tag">家系</div></li>
                </ul>
              
            </div>

            <div className="icon-info-wrap wrap-tags">
              <div className="result-icon other-info"></div>
              
                <ul className="tags">
                  <li><div className="tag">預約</div></li>
                  <li><div className="tag">外帶</div></li>
                  <li><div className="tag">刷卡</div></li>
                  <li><div className="tag">親子</div></li>
                </ul>
              
            </div>

            <div className="icon-info-wrap wrap-tags">
              <div className="result-icon ps"></div>
              <div className="result-ans">很好吃</div>              
            </div>

            <div className="icon-info-wrap ">
              <div className="addComment-result">
                Add comment
                <svg className="addComment-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                  <rect x='0' y='0' fill='none' width='130' height='65'/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        <div className="result-block result-info1">
           <Map/>
        </div>
         
        {/* <div className="result-block result-info2"></div> */}
      </div>
    )
  }
}

