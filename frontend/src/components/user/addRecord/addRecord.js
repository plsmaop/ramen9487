import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingScreen from '../../loadingScreen';
import ButtonProgress from '../../buttonProgress';

import './style.css';

class AddRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      weekday: '',
      time: '',
      redirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  componentDidMount() {
    this.props.getRestaurantNameList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reqMsg === '上傳拉麵紀錄成功') {
      setTimeout(() => this.setState({ redirect: true }), 2000);
    }
  } 

  handleInputChange(type, e) {
    const data = e.target.value;
    const newState = {
      [type]: data,
    };
    this.setState(newState);
  }

  handleSumbit() {
    const { id, weekday, time } = this.state;
    if (id.length === 0 || weekday.length === 0 || time.length === 0) {
      alert('Empty Options are not allowed');
      return;
    }
    this.props.commitRamen(this.state);
  }

  render() {
    const { isFetching, commitRamen, restaurantNameList, isLogin } = this.props;
    const { handleInputChange, handleSumbit } = this;
    // if (isFetching) return (<LoadingScreen type="載入拉麵店名..." color="#9C27B0" />);
    // console.log(this.state);
    if (!isLogin) return (<Redirect to="/login" />);
    if (this.state.redirect) return (<Redirect to="/diary" />);
    return (
      <div className="addRecord-page">
        <div className="addRecord-container">
          <form>

            <div className="row">
                <h2 className="addRecord-h2">店名</h2>
                <option>--</option>
                <select className="addRecord-select" onChange={e => handleInputChange('id', e)}>
                  {
                    restaurantNameList.map(item => (
                      <option value={item.id}>{item.name ? item.name : null}</option>
                    ))
                  }
                  <option>--</option>
                </select>
                {/* <div className="input-group input-group-icon"><input className="addForm-input" type="text" />
                  <div className="input-icon"><FontAwesomeIcon icon="store" /></div>
                </div> */}
            </div>

            <div className="row">
                  <h2 className="addRecord-h2">紀錄</h2>
                  <div className="col-third">
                    <div className="addRecord-wrap-h5"><h3 className="addRecord-h3">星期幾</h3></div>
                    <select className="addRecord-select" onChange={e => handleInputChange('weekday', e)}>
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
                    <select className="addRecord-select" onChange={e => handleInputChange('time', e)}>
                      <option>--</option>
                      <option>Lunch</option>
                      <option>Dinner</option>
                    </select>
                  </div>
                  
                </div>
              <div className="row">
              <div className="submit-result addRecord-submit" onClick={handleSumbit}>
                Submit
                <svg className="submit-svg addRecord-submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                  <rect x='0' y='0' fill='none' width='130' height='65'/>
                </svg>
              </div>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

AddRecord.propTypes = {
  restaurantNameList: PropTypes.arrayOf(Object).isRequired,
  getRestaurantNameList: PropTypes.func.isRequired,
  commitRamen: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  reqMsg: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default AddRecord;


/*

<div className="submit-result addRecord-submit" onClick={handleSumbit}>
                Submit
                <svg className="submit-svg addRecord-submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                  <rect x='0' y='0' fill='none' width='130' height='65'/>
                </svg>
              </div>

              <ButtonProgress handleClick={handleSumbit} color="#9C27B0" isFetching={isFetching} type="SUBMIT" />
*/
