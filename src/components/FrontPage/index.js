import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TagPanel from './TagPanel/index'

var MRTs = ["西湖", "市政府", "國父紀念館", "忠孝敦化", "台北小巨蛋", "忠孝復興", "古亭", "公館", "中正紀念堂", "台北車站", "中山"]
var Tags = ["豚骨", "醬油", "味噌", "煮干", "家系", "鷄白湯", "沾麵", "拌麵"]

//const Home = () => (
class Home extends React.Component{
  constructor(props){
    super(props)

    this.state={
      chosen: []
    }

    this.OnTagClicked = this.OnTagClicked.bind(this)
  }

  OnTagClicked(){

  }

  render(){
    return(
  
            <div className="front-page">
              <div className="front-page__nav">
                <div className="front-page__spacer"/>
                
                  <button className="front-page__button--sign"> Sign Up </button>    

              </div> 

              <div className="front-page__main">
                <div className="front-page__slogan">
                  <p className="front-page__slogan--big">No Ramen No Life</p>
                  <p className="front-page__slogan--small">找出你最愛的拉麵</p>
                </div>

                <div className="front-page__search">
                  <div className="front-page__wrap">
                    <p className="front-page__subtitle">請輸入拉麵店名</p>
                    <div className="front-page__input">
                      <FontAwesomeIcon icon="search"/>
                      <input></input>
                    </div>
                    <TagPanel
                      title="MRT"
                      tags={MRTs}
                      OnTagClicked={this.OnTagClicked}
                    />

                    <TagPanel
                      title="TAGS"
                      tags={Tags}
                      OnTagClicked={this.OnTagClicked}
                    />
                    
                    <div className="front-page__spacer"/>

                    <div className="front-page__button-wrap">
                      <button className="front-page__button--search"> Search </button>    
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
    )
  }
}
//);

export default Home;

/*
    <form className="searchform">
      <div  className="Title1">請輸入拉麵店名</div>
      <div className="BasicSearch">
        <div className="IconWrap">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
            <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
          </svg>
        </div>

        <input className="InputField" type="text" />
      </div >

      
      <div className="Title1">MRT</div>
      <div className="AdvanceSearch">

        <FontAwesomeIcon icon="subway"/>
        <MultiSelect 
          chosen={[]}
          options={MRTs}
        />
      </div>

      <div className="Title1">Tags</div>
      <div className="AdvanceSearch">

        <FontAwesomeIcon icon="tag"/>
        <MultiSelect 
          chosen={[]}
          options={Tags}
        />
      </div>
    </form>
*/




/* <div className="SliderHolder">
      <div className="ImageHolder">
        <img src={front1} className="SliderImage" />
        <img src={front2} className="SliderImage" />
        <img src={front3} className="SliderImage" />
        <img src={front4} className="SliderImage" />
        <img src={front5} className="SliderImage" />
      </div>

      <div className="Button-Holder">
        <a href="#SliderImage1" className="SliderChange"></a>
        <a href="#SliderImage2" className="SliderChange"></a>
        <a href="#SliderImage3" className="SliderChange"></a>
        <a href="#SliderImage4" className="SliderChange"></a>
        <a href="#SliderImage5" className="SliderChange"></a>
      </div>
    </div> */


    /* 
    <form className="AdvanceSearch">
        <span className="Title1">MRT</span>
        <div className="Multiselect">
          <label className="ToggleOpen" for="toggle-open"></label>
          <input type="checkbox" id="toggle-open"/>
          <ul className="MultiselectOptions">
            <li><label><input type="checkbox" className="station" /><span>市政府</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>國父紀念館</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>忠孝敦化</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>忠孝復興</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>中正紀念堂</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>台北車站</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>中山</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>西湖</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>台北小巨蛋</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>古亭</span></label></li>
            <li><label><input type="checkbox" className="station" /><span>公館</span></label></li>
          </ul>
        </div>

      </form>
    
    */

/* 
var OPTIONS = [
  {label:"西湖",value:"西湖"},
  {label:"市政府",value:"市政府"},
  {label:"國父紀念館",value:"國父紀念館"},
  {label:"忠孝敦化",value:"忠孝敦化"},
  {label:"忠孝復興",value:"忠孝復興"},
  {label:"台北小巨蛋",value:"台北小巨蛋"},
  {label:"古亭",value:"古亭"},
  {label:"公館",value:"公館"},
  {label:"中正紀念堂",value:"中正紀念堂"},
  {label:"台北車站",value:"台北車站"},
  {label:"中山",value:"中山"}
];
*/