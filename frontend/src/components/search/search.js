import React, { Component } from 'react';
import Select from 'react-select';

import './style.css';


const MRT = [
	{ label: '象山', value: '象山' },
  { label: '台北101/世貿', value: '台北101/世貿' },
  { label: '信義安和', value: '信義安和' },
  { label: '大安', value: '大安' },
  { label: '大安森林公園', value: '大安森林公園' },
  { label: '東門', value: '東門' },
  { label: '中正紀念堂', value: '中正紀念堂' },
  { label: '台大醫院', value: '台大醫院' },
  { label: '台北車站', value: '台北車站' },
  { label: '中山', value: '中山' },
  { label: '雙連', value: '雙連' },
  { label: '民權西路', value: '民權西路' },
  { label: '圓山', value: '圓山' },
  { label: '鷄白湯', value: '鷄白湯' },
  { label: '劍潭', value: '劍潭' },
  { label: '士林', value: '士林' },
  { label: '芝山', value: '芝山' },
  { label: '明德', value: '明德' },
  { label: '石牌', value: '石牌' },
  { label: '唭哩岸', value: '唭哩岸' },
  { label: '奇岩', value: '奇岩' },
  { label: '北投', value: '北投' },
  { label: '復興崗', value: '復興崗' },
  { label: '忠義', value: '忠義' },
  { label: '關渡', value: '關渡' },
  { label: '竹圍', value: '竹圍' },
  { label: '紅樹林', value: '紅樹林' },
  { label: '淡水', value: '淡水' },
  { label: '南港展覽館', value: '南港展覽館' },
  { label: '南港', value: '南港' },
  { label: '昆陽', value: '昆陽' },
  { label: '後山埤', value: '後山埤' },
  { label: '永春', value: '永春' },
  { label: '市政府', value: '市政府' },
  { label: '國父紀念館', value: '國父紀念館' },
  { label: '忠孝敦化', value: '忠孝敦化' },
  { label: '忠孝復興', value: '忠孝復興' },
  { label: '忠孝新生', value: '忠孝新生' },
  { label: '善導寺', value: '善導寺' },
  { label: '台北車站', value: '台北車站' },
  { label: '西門', value: '西門' },
  { label: '龍山寺', value: '龍山寺' },
  { label: '江子翠', value: '江子翠' },
  { label: '新埔', value: '新埔' },
  { label: '板橋', value: '板橋' },
  { label: '府中', value: '府中' },
  { label: '亞東醫院', value: '亞東醫院' },
  { label: '海山', value: '海山' },
  { label: '土城', value: '土城' },
  { label: '永寧', value: '永寧' },
  { label: '頂埔', value: '頂埔' },
  { label: '南港展覽館', value: '南港展覽館' },
  { label: '南港軟體園區', value: '南港軟體園區' },
  { label: '東湖', value: '東湖' },
  { label: '葫洲', value: '葫洲' },
  { label: '大湖公園', value: '大湖公園' },
  { label: '內湖', value: '內湖' },
  { label: '文德', value: '文德' },
  { label: '港墘', value: '港墘' },
  { label: '西湖', value: '西湖' },
  { label: '劍南路', value: '劍南路' },
  { label: '大直', value: '大直' },
  { label: '松山機場', value: '松山機場' },
  { label: '中山國中', value: '中山國中' },
  { label: '南京復興', value: '南京復興' },
  { label: '忠孝復興', value: '忠孝復興' },
  { label: '大安', value: '大安' },
  { label: '科技大樓', value: '科技大樓' },
  { label: '六張犁', value: '六張犁' },
  { label: '麟光', value: '麟光' },
  { label: '辛亥', value: '辛亥' },
  { label: '萬芳醫院', value: '萬芳醫院' },
  { label: '萬芳社區', value: '萬芳社區' },
  { label: '木柵', value: '木柵' },
  { label: '動物園', value: '動物園' },
  { label: '松山', value: '松山' },
  { label: '南京三民', value: '南京三民' },
  { label: '台北小巨蛋', value: '台北小巨蛋' },
  { label: '南京復興', value: '南京復興' },
  { label: '松江南京', value: '松江南京' },
  { label: '中山', value: '中山' },
  { label: '北門', value: '北門' },
  { label: '西門', value: '西門' },
  { label: '小南門', value: '小南門' },
  { label: '中正紀念堂', value: '中正紀念堂' },
  { label: '古亭', value: '古亭' },
  { label: '台電大樓', value: '台電大樓' },
  { label: '公館', value: '公館' },
  { label: '萬隆', value: '萬隆' },
  { label: '景美', value: '景美' },
  { label: '大坪林', value: '大坪林' },
  { label: '七張', value: '七張' },
  { label: '新店區公所', value: '新店區公所' },
  { label: '新店', value: '新店' },
  { label: '南勢角', value: '南勢角' },
  { label: '景安', value: '景安' },
  { label: '永安市場', value: '永安市場' },
  { label: '頂溪', value: '頂溪' },
  { label: '古亭', value: '古亭' },
  { label: '東門', value: '東門' },
  { label: '松江南京', value: '松江南京' },
  { label: '行天宮', value: '行天宮' },
  { label: '中山國小', value: '中山國小' },
  { label: '民權西路', value: '民權西路' },
  { label: '大橋頭', value: '大橋頭' },
  { label: '三重國小', value: '三重國小' },
  { label: '三和國中', value: '三和國中' },
  { label: '徐匯中學', value: '徐匯中學' },
  { label: '三民高中', value: '三民高中' },
  { label: '蘆洲', value: '蘆洲' },
  { label: '台北橋', value: '台北橋' },
  { label: '菜寮', value: '菜寮' },
  { label: '三重', value: '三重' },
  { label: '先嗇宮', value: '先嗇宮' },
  { label: '頭前庄', value: '頭前庄' },
  { label: '新莊', value: '新莊' },
  { label: '輔大', value: '輔大' },
  { label: '丹鳳', value: '丹鳳' },
  { label: '迴龍', value: '迴龍' },
  { label: '小碧潭', value: '小碧潭' },
  { label: '新北投', value: '新北投' },
];

const ramenKind = [
  { label: '豚骨', value: '豚骨' },
  { label: '醬油', value: '醬油' },
  { label: '味噌', value: '味噌' },
  { label: '煮干', value: '煮干' },
  { label: '家系', value: '家系' },
  { label: '鷄白湯', value: '鷄白湯' },
  { label: '沾麵', value: '沾麵' },
  { label: '拌麵', value: '拌麵' },
]

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = { removeSelectedMRT: true,
                  disabledMRT: false,
                  crazyMRT: false,
                  stayOpenMRT: false,
                  valueMRT: [],
                  rtlMRT: false, 
                
                  removeSelectedRamen: true,
                  disabledRamen: false,
                  crazyRamen: false,
                  stayOpenRamen: false,
                  valueRamen: [],
                  rtlRamen: false,

                  activePage: 5,
                };

    this.handleSelectChangeMRT = this.handleSelectChangeMRT.bind(this);
    this.handleSelectChangeRamen = this.handleSelectChangeRamen.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    /* this.changePage = this.changePage.bind(this); */
    /* this.toggleRtl = this.toggleRtl.bind(this); */

  }

  handleSelectChangeMRT (valueMRT) {
		/* console.log('You\'ve selected:', value); */
		this.setState({ valueMRT });
  }

  handleSelectChangeRamen (valueRamen) {
		/* console.log('You\'ve selected:', value); */
		this.setState({ valueRamen });
  }
  
	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
  }

  /* changePage(){
    const el = this.refs.page;
    $(el).removeClass('is_active')
  } */
  
	/* toggleRtl (e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	} */

 

  render(){
    const { crazyMRT, disabledMRT, stayOpenMRT, valueMRT,
            crazyRamen, disabledRamen, stayOpenRamen, valueRamen } = this.state;
    return(
      <div>
        <div className="search-container">
          <div id="search-box"><input id="input" placeholder="Search..." /><button id="search-button"><i className="fa fa-search"></i></button>
            <div className="spinner"><i className="fa fa-spinner"></i></div>
          </div>
        </div>


      <Select
          className="select-mrt"
					closeOnSelect={!stayOpenMRT}
					disabled={disabledMRT}
					multi
					onChange={this.handleSelectChangeMRT}
					options={MRT}
					placeholder="選擇附近捷運站"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtlMRT}
					simpleValue
					value={valueMRT}
				/>

        <Select
          className="select-ramenKind"
					closeOnSelect={!stayOpenRamen}
					disabled={disabledRamen}
					multi
          onChange={this.handleSelectChangeRamen}
					options={ramenKind}
					placeholder="選擇拉麵分類"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtlRamen}
					simpleValue
					value={valueRamen}
				/>

        <div id="movie-card-list">

          <div className="movie-card">
            <div className="color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">鷹流東京豚骨拉麵 公館店</h1>
                  <h4 className="movie-info">台北市汀州路3段104巷4號</h4>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">4.7</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">126</div></h5>
                </p>
                
                <a className="btn btn-outline" href="#">See more...</a>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">麵屋真燈</h1>
                  <h4 className="movie-info">台北市南京東路5段250巷11之2號</h4>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">4.3</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">69</div></h5>
                </p>
                
                <a className="btn btn-outline" href="#">See more...</a>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">鬼金棒 台北總店</h1>
                  <h4 className="movie-info">台北市中山北路1段92號</h4>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">4.9</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">361</div></h5>
                </p>
                
                <a className="btn btn-outline" href="#">See more...</a>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">Tsuta Taiwan</h1>
                  <h4 className="movie-info">台北市忠孝西路1段36號</h4>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">3.8</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">11</div></h5>
                </p>
                
                <a className="btn btn-outline" href="#">See more...</a>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="color-overlay">
              <div className="movie-content">
                <div className="movie-header">
                  <h1 className="movie-title">山嵐拉麵 忠孝店</h1>
                  <h4 className="movie-info">台北市大安區大安路1段51巷29號</h4>
                </div>
                <p className="movie-desc">
                  <h5 className="search-ratings-h">Ratings: <div className="search-ratings">4.4</div></h5>
                  <h5 className="search-views-h">Views: <div className="search-views">77</div></h5>
                </p>
                
                <a className="btn btn-outline" href="#">See more...</a>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pagination-wrapper">
          <ul className="search-pagination">
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link is_active" /* onClick={this.changePage} */>1</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>2</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>3</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>4</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>5</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>6</a></li>
          </ul>
        </div>
        
      </div>
    )
  }
}

