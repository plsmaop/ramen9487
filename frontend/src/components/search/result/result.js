import React, { Component } from 'react';
import './style.css';

export default class SearchResult extends Component {
  render(){
    return(
      <div class="result-wrapper">

        <div class="result-block result-summary">
          <div className="result-summaryCard">
            <div className="result-color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">Tsuta Taiwan</h1>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">3.8</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">11</div></h5>
                </p>

              </div>
            </div>
          </div>
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

            <div className="icon-info-wrap">
              <div className="result-icon near-mrt"></div>
              <ul class="tags">
                <li><a href="#" class="tag">象山</a></li>
                <li><a href="#" class="tag">國父紀念館</a></li>
                <li><a href="#" class="tag">南港軟體園區</a></li>
                <li><a href="#" class="tag">中正紀念堂</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div class="result-block result-info1"></div>
        <div class="result-block result-info2"></div>
      </div>
    )
  }
}