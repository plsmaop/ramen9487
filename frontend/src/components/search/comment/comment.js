import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import ButtonProgress from '../../buttonProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: {
        env: 0,
        food: 0,
        service: 0,
      },
      content: '',
      redirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reqMsg !== this.props.reqMsg) {
      setTimeout(() => this.setState({ redirect: true }), 1800);
    }
  }

  handleInputChange(type, e) {
    const data = e.target.value;
    const newState = {};
    if (type === 'content') newState[type] = data;
    else {
      newState.scores = this.state.scores;
      newState.scores[type] = data;
    }
    this.setState(newState);
  }

  render() {
    const { id, name, postReview,isFetching, postNewRestaurant } = this.props;
    
    const { handleInputChange, state } = this;
    const { redirect } = this.state;
    console.log(this.props);
    if (redirect) window.location.reload();
    return (
      <div className="comment-page">
        <div className="comment-container">
          <form>
            <div className="row">
                <h2 className="comment-h2">店名</h2>
                <div className="input-group input-group-icon">
                  <input className="addForm-input" type="text" value={name} />
                  <div className="input-icon"><FontAwesomeIcon icon="store" /></div>
                </div>
            </div>

            <div className="row">
              <h2 className="comment-h2">Ratings (0~5)</h2>
              <div className="col-third">
                <div className="comment-wrap-h5"><h3>食物</h3></div>
                <div className="input-group input-group-icon menu">
                  <input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1" placeholder="0.0" onChange={e => handleInputChange('food', e)} />
                </div>
              </div>
              <div className="col-third">
                <div className="comment-wrap-h5"><h3>環境</h3></div>
                <div className="input-group input-group-icon menu">
                  <input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1" placeholder="0.0" onChange={e => handleInputChange('env', e)} />
                </div>
              </div>
              <div className="col-third">
                <div className="comment-wrap-h5"><h3>服務</h3></div>
                <div className="input-group input-group-icon menu">
                  <input className="addForm-input comment-ratings" type="number" min="0" max="5" step=".1" placeholder="0.0" onChange={e => handleInputChange('service', e)} />
                </div>
              </div>
            </div>

            <div className="row">
                <h2 className="comment-h2">Comments</h2>
                <textarea className="addForm-textarea" rows="10" cols="50" onChange={e => handleInputChange('content', e)}></textarea>
            </div>

            <div className="row" style={{ textAlign: 'center' }}>
               <div className="submit-result" onClick={() => postReview(id, state)}>
                Submit
                <svg className="submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                  <rect x='0' y='0' fill='none' width='130' height='65'/>
                </svg>
              </div> 
              {/* <ButtonProgress type="submit" color="#FF4081" isFetching={isFetching} handleClick={() => postNewRestaurant(state)} /> */}
            </div>

          </form>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,
  reqMsg: PropTypes.string.isRequired,
  postNewRestaurant: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Comment;
