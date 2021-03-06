import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pagination from './pagination';
import LoadingScreen from '../loadingScreen';
import SearchListItem from './searchListItem';

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

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelectedMRT: true,
      disabledMRT: false,
      crazyMRT: false,
      stayOpenMRT: false,
      valueMRT: '',
      rtlMRT: false,
      removeSelectedRamen: true,
      disabledRamen: false,
      crazyRamen: false,
      stayOpenRamen: false,
      valueRamen: '',
      rtlRamen: false,
      activePage: 5,
      keyWord: '',
      currentPage: 1

    };

    this.handleSelectChangeMRT = this.handleSelectChangeMRT.bind(this);
    this.handleSelectChangeRamen = this.handleSelectChangeRamen.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleSearchConditionsChange = this.handleSearchConditionsChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    /* this.onPageChanged = this.onPageChanged.bind(this); */
    /* this.changePage = this.changePage.bind(this); */
    /* this.toggleRtl = this.toggleRtl.bind(this); */
  }

  handleSelectChangeMRT(valueMRT) {
    /* console.log('You\'ve selected:', value); */
    this.setState({ valueMRT });
  }

  handleSelectChangeRamen(valueRamen) {
    /* console.log('You\'ve selected:', value); */
    this.setState({ valueRamen });
  }

  toggleCheckbox(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  /* onPageChanged = data => {
    console.log('fuck');
  } */

  /* onPageChanged example
  onPageChanged = data => {
    const { allCountries } = this.state; 放所有資料陣列
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit); 這一夜要顯示的

    this.setState({ currentPage, currentCountries, totalPages });
  }  */

  /* toggleRtl (e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  } */

  handleSearchConditionsChange(e) {
    const searchConditions = {};
    searchConditions.keyWord = e.target.value;
    this.setState(searchConditions);
  }

  componentDidMount() {
    this.props.init();
  }

  handleSearch(i) {
    console.log(this.props.totalNumber)
    /* console.log('fuckkk',i) */
    const { getRestaurantList, init } = this.props;
    const { /* currentPage, */ valueMRT, valueRamen, keyWord } = this.state;
    const location = valueMRT.split(',');
    const tag = valueRamen.split(',');
    const searchConditions = {
      location: (location.length > 0 && location[0] !== '') ? location : [],
      tag: (tag.length > 0 && tag[0] !== '') ? tag : [],
      keyWord,
      sortType: 'totalScore',
    };
    if(! isNaN(parseInt(i.currentPage)))
      this.setState({currentPage: i.currentPage})
    console.log('fuck',this.state.currentPage)
    getRestaurantList(i.currentPage, 5, searchConditions);
  }

  render() {
    const { crazyMRT, disabledMRT, stayOpenMRT, valueMRT,
      crazyRamen, disabledRamen, stayOpenRamen, valueRamen,
    } = this.state;
    const { restaurantList, totalNumber, isFetching, init } = this.props;
    const { keyWord } = this.state;
    const { handleSearchConditionsChange, handleSearch } = this;
    console.log(this.state);
    const limit = totalNumber%5 === 0 ? totalNumber/5 : Math.floor(totalNumber/5)+1;
    return (
      <div className="search-page">
        <Link to="/addform">
          <span class="addForm-button">
            <i class="addForm-button-icon fa fa-plus"></i>
          </span>
        </Link>

        <div className="search-container">
          <div id="search-box">
            <input
              id= 'input'
              placeholder="Search..."
              value={keyWord}
              onChange={e => handleSearchConditionsChange(e)}
            />
            <button id="search-button" onClick={handleSearch}>
              <i className="fa fa-search"></i>
            </button>
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
        {
          isFetching ?  <LoadingScreen type="拉麵列表載入中..." color="#FF5722" /> :
            (<div>
              {
                restaurantList.map(item => (<SearchListItem {...item} init={init} />))
              }
              <div className="pagination-wrapper">
              
                {(Math.ceil(totalNumber/5) > 0)?
                  
                   <Pagination totalRecords={totalNumber} currentPage={this.state.currentPage} pageLimit={5} pageNeighbours={1} onPageChanged={this.handleSearch} />
                  : null}
                {/* totalRecords: 總共幾筆資料 pageLimit: 最多幾頁 改這兩個東西就好 */}
              </div>
            </div>) 
        }
      </div>
    );
  }
}

Search.propTypes = {
  totalNumber: PropTypes.number.isRequired,
  restaurantList: PropTypes.arrayOf(Object).isRequired,
  getRestaurantList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
};

export default Search;
