import React, { Component } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import './style.css';

let data=[
  {
    "eatTime": "lunch",
    "Mon": 68,
    /* "hot dogColor": "hsl(202, 70%, 50%)", */
    "Tue": 89,
    /* "burgerColor": "hsl(197, 70%, 50%)", */
    "Wed": 49,
    /* "sandwichColor": "hsl(53, 70%, 50%)", */
    "Thu": 17,
    /* "kebabColor": "hsl(195, 70%, 50%)", */
    "Fri": 80,
    /* "friesColor": "hsl(243, 70%, 50%)", */
    "Sat": 30,
    /* "donutColor": "hsl(88, 70%, 50%)", */
    "Sun": 5,
    /* "junkColor": "hsl(270, 70%, 50%)", */

  },
  {
    "eatTime": "dinner",
    "Mon": 99,
    /* "hot dogColor": "hsl(38, 70%, 50%)", */
    "Tue": 17,
    /* "burgerColor": "hsl(277, 70%, 50%)", */
    "Wed": 73,
    /* "sandwichColor": "hsl(289, 70%, 50%)", */
    "Thu": 1,
    /* "kebabColor": "hsl(226, 70%, 50%)", */
    "Fri": 44,
    /* "friesColor": "hsl(213, 70%, 50%)", */
    "Sat": 59,
    /* "donutColor": "hsl(120, 70%, 50%)", */
    "Sun": 72,
    /* "junkColor": "hsl(80, 70%, 50%)", */

  },
]

export default class Diary extends Component {
  render(){
    return(
      <div className="diary-wrapper">

        <div className="diary-block diary-profile">
          <div className="logo-block"><div className="diary-logo"></div></div>
          <div className="diary-user">User</div>
          <div className="diary-username">陳孝思</div>
        </div>

        <div className="diary-block diary-heatmap">
        <ResponsiveHeatMap
            data={data}
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
            colors="purples"
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
            cellOpacity={0.75}
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
                }
            ]}
            fill={[
                {
                    "id": "lines"
                }
            ]}
            animate={true}
            motionStiffness={100}
            motionDamping={9}
            isInteractive={false}
            hoverTarget="cell"
            cellHoverOpacity={0.55}
            cellHoverOthersOpacity={0.25}
        />
        </div>

        <div className="diary-block diary-favorites">
            <div className="diary-favorite-logo-block"><div className="diary-favorite-logo"></div></div>

            <div className="diary-favorite-element ">
              <div className="diary-favorite-img love1"></div>
              <div className="diary-favorite-name">東京鷹流豚骨拉麵 公館店</div>
            </div>
            
            <div className="diary-favorite-element ">
              <div className="diary-favorite-img love2"></div>
              <div className="diary-favorite-name">山嵐拉麵 忠孝店</div>
            </div>

            <div className="diary-favorite-element ">
              <div className="diary-favorite-img love3"></div>
              <div className="diary-favorite-name">鬼金棒 台北總店</div>
            </div>

            <div className="diary-favorite-element ">
              <div className="diary-favorite-img love4"></div>
              <div className="diary-favorite-name">麵屋真燈</div>
            </div>
            
            <div className="diary-favorite-title">Favorites</div>
        </div>
        

      </div>
    )
  }
}