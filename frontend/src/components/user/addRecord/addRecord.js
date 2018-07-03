import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

export default class AddRecord extends Component {
  render(){
    return(
      <div className="addRecord-container">
        <form>

          <div className="row">
              <h2 className="addRecord-h2">店名</h2>
              <div className="input-group input-group-icon"><input className="addForm-input" type="text" />
                <div className="input-icon"><FontAwesomeIcon icon="store" /></div>
              </div>
          </div>

          <div className="row">
                <h2 className="addRecord-h2">紀錄</h2>
                <div className="col-third">
                  <div className="addRecord-wrap-h5"><h3 className="addRecord-h3">星期幾</h3></div>
                  <select className="addRecord-select">
                    <option>--</option>
                    <option>Mon</option>
                    <option>Tue</option>
                    <option>Wed</option>
                    <option>Thu</option>
                    <option>Fri</option>
                    <option>Sat</option>
                    <option>Sun</option>
                  </select>
                </div>
                <div className="col-third">
                  <div className="addRecord-wrap-h5"><h3 className="addRecord-h3">時間</h3></div>
                  <select className="addRecord-select">
                    <option>--</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                  </select>
                </div>
                
              </div>


          <div className="row">
            <div className="submit-result addRecord-submit">
              Submit
              <svg className="submit-svg addRecord-submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                <rect x='0' y='0' fill='none' width='130' height='65'/>
              </svg>
            </div>
          </div>

        </form>
      </div>
    )
  }
}