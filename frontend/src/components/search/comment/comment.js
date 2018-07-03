import React, { Component } from 'react';
import './style.css';

export default class Comment extends Component {
  render(){
    return(
      <div className="comment-container">
        <form>

           <div className="row">
            <h2 className="comment-h2">Ratings (0~5, one decimal allowed)</h2>
            <div className="col-third">
              <div className="comment-wrap-h5"><h3>食物</h3></div>
              <div className="input-group input-group-icon menu"><input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1"/></div>
            </div>
            <div className="col-third">
              <div className="comment-wrap-h5"><h3>環境</h3></div>
              <div className="input-group input-group-icon menu"><input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1"/></div>
            </div>
            <div className="col-third">
              <div className="comment-wrap-h5"><h3>服務</h3></div>
              <div className="input-group input-group-icon menu"><input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1"/></div>
            </div>
          </div>

          <div className="row">
              <h2 className="comment-h2">Comments</h2>
              <textarea className="addForm-textarea" rows="10" cols="50"></textarea>
          </div>

          <div className="row">
            <div className="submit-result">
              Submit
              <svg className="submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                <rect x='0' y='0' fill='none' width='130' height='65'/>
              </svg>
            </div>
          </div>

        </form>
      </div>
    )
  }
}