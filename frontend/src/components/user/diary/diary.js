import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import './style.css';
import LoginPanel from '../index';
import AddRecord from '../addRecord';
import LoadingScreen from '../../loadingScreen';
import DiaryItem from './diaryItem';

let data = [
  {
    "eatTime": "lunch",
    "Mon": 0,
    /* "hot dogColor": "hsl(202, 70%, 50%)", */
    "Tue": 0,
    /* "burgerColor": "hsl(197, 70%, 50%)", */
    "Wed": 0,
    /* "sandwichColor": "hsl(53, 70%, 50%)", */
    "Thu": 0,
    /* "kebabColor": "hsl(195, 70%, 50%)", */
    "Fri": 0,
    /* "friesColor": "hsl(243, 70%, 50%)", */
    "Sat": 0,
    /* "donutColor": "hsl(88, 70%, 50%)", */
    "Sun": 0,
    /* "junkColor": "hsl(270, 70%, 50%)", */

  },
  {
    "eatTime": "dinner",
    "Mon": 0,
    /* "hot dogColor": "hsl(38, 70%, 50%)", */
    "Tue": 0,
    /* "burgerColor": "hsl(277, 70%, 50%)", */
    "Wed": 0,
    /* "sandwichColor": "hsl(289, 70%, 50%)", */
    "Thu": 0,
    /* "kebabColor": "hsl(226, 70%, 50%)", */
    "Fri": 0,
    /* "friesColor": "hsl(213, 70%, 50%)", */
    "Sat": 0,
    /* "donutColor": "hsl(120, 70%, 50%)", */
    "Sun": 0,
    /* "junkColor": "hsl(80, 70%, 50%)", */
  },
];

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitRamen: false,
      image: '',
    };
    this.handleCommitRamen = this.handleCommitRamen.bind(this);
  }

  componentDidMount() {
    this.props.fetchDiary();
  }

  handleCommitRamen() {
    this.setState({ commitRamen: true });
  }

  render() {
    
    const { isLogin, userInfo, isFetching, diary } = this.props;
    let d = data;
    if (typeof diary.ramenRecords !== 'undefined') d = diary.ramenRecords;
    const { image } = this.state;
    if (!isLogin) return (<Redirect to="/login" />);
    if (isFetching) return (<LoadingScreen type="載入日記..." color="#9C27B0" />);
    const { handleCommitRamen } = this;
    const { commitRamen } = this.state;
    
    return (
      <div className="diary-page">
        <div className="diary-wrapper">

          <div className="diary-block diary-profile">
            <div className="logo-block"><div className="diary-logo"></div></div>
            <div className="diary-user">User</div>
            <div className="diary-username">{userInfo.username}</div>
          </div>

          <div className="diary-block diary-heatmap">
            <Link to="/addrecord">
              <span class="update-diary-button">
                <i class="update-diary--button-icon fa fa-plus fa-lg"></i>
              </span>
            </Link>

            <ResponsiveHeatMap
              data={d}
              keys={[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
              ]}
              indexBy="eatTime"
              margin={{
                "top": 100,
                "right": 60,
                "bottom": 60,
                "left": 60
              }}
              colors="oranges"
              axisTop={{
                "orient": "top",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": 36
              }}
              axisLeft={{
                "orient": "left",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legendPosition": "center",
                "legendOffset": -40
              }}
              cellOpacity={0.77}
              cellBorderWidth={3}
              cellBorderColor="inherit:darker(0.4)"
              labelTextColor="inherit:darker(1.8)"
              defs={[
                {
                  "id": "lines",
                  "type": "patternLines",
                  "background": "inherit",
                  "color": "rgba(0, 0, 0, 0.1)",
                  "rotation": -45,
                  "lineWidth": 4,
                  "spacing": 7
                },
              ]}
              fill={[
                {
                  "id": "lines"
                },
              ]}
              animate
              motionStiffness={100}
              motionDamping={9}
              isInteractive={false}
              hoverTarget="cell"
              cellHoverOpacity={0.55}
              cellHoverOthersOpacity={0.29}
            />
          </div>

          <div className="diary-block diary-favorites">
            <div className="diary-favorite-logo-block"><div className="diary-favorite-logo"></div></div>
            {
              diary.myRamen ? diary.myRamen.map(item => (
                <DiaryItem {...item} />
              )) : null
            }
            <div className="diary-favorite-title">Favorites</div>
          </div>
        </div>
      </div>
    );
  }
}

Diary.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
  diary: PropTypes.object.isRequired,
  fetchDiary: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Diary;

/*
                {/* <div className="diary-favorite-img love1"></div> }
                <img src="https://2.bp.blogspot.com/-9i4Qmtjlq4c/We8IWmECzcI/AAAAAAAAbrQ/PYMDXo9loH8OOVYvpB3eTws8yXTnR8hXwCLcBGAs/s1600/IMG_3337.JPG"/>
                <div className="diary-favorite-name">東京鷹流拉麵</div>
                */
