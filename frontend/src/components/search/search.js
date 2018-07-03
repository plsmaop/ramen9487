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
        <span class="addForm-button">
          <i class="addForm-button-icon fa fa-bars fa-lg"></i>
        </span>

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

          <div className="movie-card card1">
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
            <img  src="https://2.bp.blogspot.com/-9i4Qmtjlq4c/We8IWmECzcI/AAAAAAAAbrQ/PYMDXo9loH8OOVYvpB3eTws8yXTnR8hXwCLcBGAs/s1600/IMG_3337.JPG"/>
          </div>

          <div className="movie-card card2">
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
            <img  src="https://pic.pimg.tw/vilo92/1461163249-2633035104.jpg?v=1461163301"/>
          </div>

          <div className="movie-card card3">
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
            <img  src="http://pics13.yamedia.tw/43/userfile/s/strangerckbe/album/156bdad30e9dbd.jpg"/>
          </div>

          <div className="movie-card card4">
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
            <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUXGBUVFRUVFRUVFxUVFRUWFhUVFRUYHiggGBolGxUVITEhJykrLi4uFx83ODMtNygtLisBCgoKDg0OGxAQGzAgICUrLS0tLS0tLS0tKy0tLS0vLS0tLS0tLS0tLS0tLS0wLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAABAwIEBAQEBAUDAwUAAAABAAIRAyEEBRIxBkFRYRMicYEykaGxQsHR8BQjYnLhBzNSFYLxQ0SSorL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAMBEAAgIBBAEDAgUDBQEAAAAAAAECEQMEEiExQSIyUWFxEzOBsfAUocFCUpHR8QX/2gAMAwEAAhEDEQA/ALjV290l/JOQk1DsvnGdhCwbR1T2nZIjmny3ZYY2JfzSqfxBIeE6wr3kzwOOsQhWNkl52RVTYogaDpu8qcwGCdU2FuZUnKMuNQAmzfutHSpho0tFuyv02jc6lPomzZ9vEeyLgsvZTFhJ6lS0CiXXjFRVIglJt2wIIIIjAI4TRxDQYTdXHsbuY9UDnFdsJRZJhFChnMm9vmo5zynMSlvUY1/qQSxyfgtIRKBSzem6ADvYd/RPtxrDsUSywfTMcGh9Ek06mpKKNOzKBKBANiiRSvHiJiMDzb8v0UAmN1dgpnFYUP7Hr+qnyYFLmPY2ORrspy8I6GyKpRLTBsUpjYsodrT5H3xwJqNSSIcicU3UcYQs1BRMnuicIMp6mAN+aQ8rKNsZcVEq2J7KXEhMVGD8/dAwkJpggBBOtIhBaj1kSbWTdRplSZtsg5qiZUmGwSE8Rsm6dk7M3WoFjVUWRnkl1mpvksPLocDrhTsqy81TLvgH1/wo+XYU1HgcuZ7LWUKQADRYBdHR6bf65dfuS6jLt9K7FU2chYBOa42+fNJLuQ2SSuwc+xJRIOcqPO87ZRaZMn1sP1KDJljjVyChBydItK+Ma3mqbH52B5RckwAsPmnE+t+psuMgETFj0Jm8gclY4PC1HEOcdRghtMCLn8T37gRyC5WbWZZcRVL+5fDSKKuYdTibW8spEnTALg3yyIFipWV4qriD4dRukOkNJgjUASHNE2MgSJggnoqKrhq7Xy55AaYaxrWMpDlEAku91f8ACeGaCz+YHaHOI82og6HSCRb8UwJS8Ud067XkdkjGMLQ9mOWYllKloNNrgHms7cAmNO0eURf191n8+xb8MWNGkky4OLCQ70v5fZbbOC59AhrWuJhul4BFjJ1GQIIgzy3vssJmOKbiWOoPc3xKR1Mc0hzXQBZrrbXCfnwY4u0hennKXf6hYjN3ODXM8zXAm3IjdFlfEB1gE2G/cdFV4HCVJabjQZlpFvYeiarsZTOvUBrEy2SSZvAsWj1Uaxx5rs6KhGqaOlYLOZjl6zz9VdUcwB3K4gM1DnBukmPh8xcZ9DN1a4LF1Gw5ry2YaADpvEwYtKfDLmxe52ST0cJe1nZmuB2QKx2Q8QS1wqG7BMjm2YkjkbhajDYsPG+66GHUxyfc52XDLG6ZIJQBRFBpVAoTiKAeO42Kp6zYJB3CvngA2Mjl+hULNcIajZb8Q279knNj3q12HCVPkq2i101U2S8O8OHdHWbZc9rgpT5GydkQSnjyhKbTCyjSOHTKS9kgJcC/qj2AQ0bZHcYsiTjqfdBDTC4GgEdTZBkoy1SDwUhZPmwSabYEKs4kzj+GYCG6nuMNBsLbk/MIoxb4RsYuctsS2eLJnRyF5WUyrjeXaMQ0NB2e2YH9wP3W+yLDh7vE3aNjyJKdHTyc1F+QcqliT3FtleD8NgH4jv6qcbW+fqiaUhxXehFRSSOPKTbtglJe+ET6gAkmFkeJuJqdNp8w6C6HLlWNWzYQcnSLHNc3gljHNFpc9xhrR3J5fdcz4jrPqOboqNqMJI1sdLQdzqnayrszzl9fUxocWuIkwSBp7+6hUIZqY6Sw/hbJLi2+463+S5slOb3y7+Dr4MSxlxkbqTHa2NL9O9UiXPdfyUGcvVa3IcLiqzneJop05Gumx01AyJbTLgfK5xjUSZgnbdY2jm7GFjRu4gPNMgGlTJE6SdnnryCl4jOcJQ1U8PUNNpu4MD3ueRN31Sd7nbqhjF3uabCy8+lP9TUYrK6r3HzsDg6QwPaA1kNGgNBkQAe11P4UcKQq0i0gscNQIE+cBur0sfkuRU6Ie/XqdzJM6XBvpz9911DhShUGFmsS9moODqjoljWSzw3TLQXOG5I8p6p8Irfa7E5otY6b4NPmdFxouFMiTLodOl1p0ugHykgAiDIkc1yDE5d4dNzqJeatB9PxnPZoFRtXUJp0yNTQ1zWjzb6zawXW6GMaTqa4vuJDNLgwEDcAyRz2JUx9BlQGbHTBIOlwB2IIuNrHsqnFSJMeR4zm2X4pgDKhY4iN40kSOc8uSps/y5rqjqrA5uuLkOgSNtzAldOxOQBz/KdVJzPDcwvcYiSHtJvqk3MyqrMchNJjG0qT3gCX+YF5IEReJnt8jsonp5w5iVw1MG+Tm2TZQ6qT4+mnSBkveYBEzA5lXfEecUqdFtGhTE6mgOeC0GA69oAiwAJ/EofElOvTGupQfSa8iAWuAbAs0nafus7Wq6nCD5YuI+kew5LYwcnc0Pk7Spmq4dxz20qr6h0l0U2z1N3kdojbqtFkebmY1k3gDl6wud42tWMEMIa2wETA6x17rR8LYo1AWkgVA06D5QZAMBw5g2U2XE164/8AgxqLTUjq+X44PHfopi59kWcm0+5kb8yt3ha2toKu0uo/EW2XaOVnwvGx8FOU3JlKBVYgp87wZY/W3Y7+v+VGov1BaPE0hUYWn99PqskyWuIO4JBCj1EKdryOxy4osNFgiYNwjpPmIRONypxgw6x90HNuluZN0TxsUNBWRqkyiThaEEFG2NMTgCKnsnGKQoDaqXinCCszRHmF2noenoVetULMKM3CK2uUFjk4zTRyvG4YiQRccu/T1XdOEcq/hcJSon4g0Fx/qd5newJj2WUyrLw/FMOhrmuEVWuEyG+dj29Htc1t+hK6GuzpHvjuF/8A09Ssm2K+7ASkIyU1iaulpceQJVpxzO5u7+IrigHEBt3AGDHlv9SFAx3CdI6pAuBBcBLSOhVZwxiXfzcS6Xl1V9MERqdHmgDtcch91pKuY1dM+ECOYLwOW94CjSUrcjpbJRpR/jKzDZPDYDAI6RcJ1uQMePM0QO1j+qTU4oDHS/yjaGhz9+vlj2H/AI0eX42nWZLHNcOoOx6EcighCDfAybyQVtFDX4ewtRpp1KTQCIaWgNI9CNli6/AL2VHENDmB0Nc4/E2AdRaOkkey6ZXp8ilUqogNdz680TjxXQuMmnfZhcPkTRRqsNFhNnNgQ4uaQQAOY91OzTAuxGCFIVXB3iBzoNw0yNI7D8grjN6XhjUySTYTfT191TZPjWUyTUJLtg1rXPc5pv8ACBJvz6hTpuMqGSqUd7MnjeEq9B/iYao7W29zDydzDxv7recH8VDFDwardGIZZ4iWyLgzykAn2deydoY+lWdpbqa8CdLgWkjsHRq+an4bBNZLmMgOMu2Enmbc0+EpJ/KJ8jjOPBY0pkwdQ3JtLbCAABcLB8c5vj6OI0YZ0sLGmAxr3NJJBMEbW5lbaj4ehtJhNh5bmYHLV1+qreI+H2Yxo8WmC5pLQ4OLXBpPJw5f0kEKnsnXD5ON43Ma1cjxDqAEQS4iSbuvaTba1lBxDajJd8N4Gnl+i6BU/wBPa1I+SsyowbtqBzDtYS3VKq8RlTWzTqRqESAdv1CkyzeN3JcHTxbZqovkzOExpbd9Z5PRpn7qVTxemoys0sqAOBLg3Q9t76hz9VraXDuGqAeQd+UWVjg+CMO5hgRsAf7h135fdKi4ZHx/gZKTgqZlMqzKmKj2gODgTDZmb7t+8LpPCeYtqsJDgeR5EHlIXPc14RqU6zBTMy6ztWxGwvcbKRk3j4PFllUQyoD5gfKDu2ehBkQg/DUJ74i8rWSFM64gFByvHtqtsZKnLoQmpK0c1quB2mVRZ7h9NTVycPqN/wAleUTf7+nNRs5o6qc82mfyK3JHdFoyLplBh3wQpdVuxVbUJsVYU3yFzylBtFikHZOMG6bd0WeDRqEE8Go1m09ZDZYBONCabs1PtaoUipgYLoPQi6OqFvgzySuHsMPFc7o2Pmf8LQlVHDbfK939UfIf5VsV3NHGsSOdqHc2EqDjeqRhKkcxHsr9Znjozh3jsfnyTszrGxWL3oi8KYamMOxjCHBoaSRsXuEuPrdZj/UrPvCb/Ds+Jw1bfhkiZ5bLW8LM/lRHYRtYcliP9W8slzazTJA0uZBtv5hA2EH5JMWnFWXu1KVdmBp16rxHiEl0MjXc7Ac9pgfda7/TjOaorCnquZbJMhxAsHHnyv391iBXgQHED7ROx5brScF0S7G0gCb6TL7OgA9NxyTsmOLj0T4sslKm+zuuHqiq27S1w3a6Jafbl3VfimXuYhTKMtg7/olZnSluoD9lInG4jk6kRHuFSk4HeI7/ANJXLBmrnYhzGjUGeICQSJc1waWGekLa5xjvBbdxDYPiabODNJIj3B+S5PlLwKTnuMGYM7uJE39XEfJIS3K330ZkbiuDSZhjQdBYX06gBL5i72ny6SCQLE/Ie+u4V4gLwWPcZG/lBkwIP36Ll2Mq6Q52nU4uhsuNgLukexv/AFJX8dUpOb4NQsY9jN3EdtJLbyIO3qmLG+KOfDM1O/DOv/8AUHtqGqzQaUhrnERZrtJeD0n1iCrz+Oa4+Hclw/DyBnn7LlTs9aaOlunQxtgNZnSA0tBcBbfbqVpuHcy8MjxnXDWt1EEbC085WRyuHD+SvEll5+EaN43adUA/ivPObhUTuF6dR5kuFvKQ4yDfafZaQ1WPu1wcImQR0vsmpIuBflCZNKZRG4+3gxOYsqYN0OnTuHDYja/RW+SZm18wd+h/cK9zrCtezUQPU8tVv1UfLeHsOaQmmNXMglp37FSrTuMvQU/1MZY/Wg8wpAMNSCdPmAaJc4gWAAvKGb5a2pTBgAwDIFxz35bo8prXe2ZDHPaCd4DiB67KwmZbz3je3NNilJWTSuLKyg6H4epME6qT/wCq0tJ9xPutAsXWq1A54c2BTqNe02/5aHbbWcFsaTpAPUIsL7QnNGmOApx7dTSOoKaT1FVIQzIvbYhSaDrBIxrIc4dCfuibYBc2SptFCZLO5SMS2xKcqm47onXCyvAQ0x9kEmIQQ2bRFAUmmbqNtCdoHzKJdlLHYujrNslxdJxAsjrgGy04bH8o/wBzlZlVnDv+1/3FWZXc035Ufsc7N72EsxxrPg1NO+k/Y/uVp1n+KCAx09D9l7VflMHF70RuHMQC2QWmby0g73me/wCqVmNJpPnuDuJie0rIcIYwtLmQTBgHkRuI9NlsWHdzj+E278j+/ooXk3Q20dTY4ysx2acD4eo1xYzTUIcQZkajJDekT2VrwNweMG01HGar2gOiC1g3LWuiTeL9lbtY4kGABz35K0wbgTGkW5x+ZTNPvSqTAyxXdD7GHkpFNpiCmK2IgWPNCjiCd1VaJ5JtGd4+y0PwtZ4HmDDMfiEiQfkuXYjIXMc9gh7A6RJ0i3wkieYO3ddxzV7PBf4glul2odRF1BwOSUDTZqYDDQZI5xEpTjLd6TGlLHTOH5pgXU3CCHuI1Q24nrf09fohiKBazDzJeNTvm4uI+ZFl1biThqgWtbTogAuu5oAI5Nk7hsmfbuqbFcLCmxzao8oDtLmanAzycIsQQLn25r25rhkM8DUqXRjP40PdTpsBAPl0loGgTPLlNvc7qbhccRVaHkgzDtToB5GTzPQ9FXcP5OcTjNDfIxhLnOG8NIHM2klo+fRaLPOHaviNlgqNdZpBAkgXLhHT125JeRwuvoHiwzg1JdF5gcZSe6AS2pyBO/drhv6K6pZjECpfo79VzPD0K1N7mPpv0ti5kx0Mj03VxRz4s/3POznfzDvPP3Ui345enk7KhvimdPw721GEbi49e8qprZwKDKhduIDGi8uMgemx9gqLLcyBvRrEf0zB/wDid1BzTL3vJd4h31RYif7f0Tnqk18MXHAk6l0XGQvtIdufN3vN/cLUYFoEmbk357BYXAYp1OPLMcxH2MK9bxE0Nu11uQbJn06INPkS9weoi2/SJz5xJrECwZz5nckei0eXGaTP7R9lianFNLFMqNpEhxhpDgabpe7SI9/stxgmgMaBsBb0VOL8xkmX2oeT9FMp6iFUiZmczIfzHjuVGbJapmYf7jj/AFKLR5juoZ+9/qOj7SZuwHogBMo6A8hCJhQBheHN0SIPQWcG8kYtlKpsuEshBo2Ue3kosdaLoYkeVEN0qrsj8A+Sdw67yuHf8laFUmQOh7m9R9ldFdfSO8SIdQqmwKl4mH8txP8AxKuVBzmlqpkbpmeO7G19BUHUkYXhINAJ3MR7ix+yvJ1Hf2VHkFIMeaWoAlzmgRdp1fiJ/ph3/crkAt1DmP2FBDo7Kduyex1lKwz/AC8r/sqnbVJENN7fe6nsIMAWt7d0+MheSNEusyWiADe9zYIqBJPL2+spilVDT67xfdTJFMWuTfkLd0VrsRJ1wU/FmLLWNaLlzmgDrzP0BVlgapgDtEeiyQxtSvi21JAayWhty13nMuB5iWtF+h7rVYR5BktEfVBGXNhuNQQ8GagQ4WO43kFDEYNmjzFxEbOcSB+vunS0DYWiZVDxJmQFIskjUIPUM5n1Ow7uC2bSQpQ3yMnkFenh3VQGmXvLi7Y6XeZrfQB31WkwePDvhPta6hZfgWNAY6NbZDzzLySSHTzEhsdirKplFEQSSCTaLSY5QuXLdKbaOlOGNLnskeUkO+F3WAR6EdFV53hqGgnEUrEwKjATcmBJF2+9lOfllWPLUnpqEH5qL/Fmn/KxIs4aSfwm0HZOi8kO1wS0r4ZznNqbsM/UGvNIny1A0jT/AHEWVllmfucBpqB46OEn9VtMPTY3yt8zDsJmOre4/wAqqzPh/CVZcaIa7m5ksd6+WELywlxNf8fz/I3c/HP3IdPNWF3nZHds/UFSw6i4eV9+lwVXN4UfPkxDoj4agDvqLoHhuuP/AFWD/td87FDUPEv3N3FxSwFMm5a7ufvPVa3IsT4lJh7R8lg8HlNZr6dN58rzp1tnnewPabyukYXDtptDWiALBV6SDTZHqJJ0PBP0Uy1OPdpY49AVfEkZn8SZc49ST9Uw3cp1NndQy5djkTcPZJG6UxJ5oWEMvF0Ep7bokLQVivDuUZZspBbdDQg2Bbhl1O6N4sniEl7VjibZHwVTS8Hv91oHLOuarzCVdTAeYsVXopVcRGpjfI7KRWbIIRlAFdGiQ5jxUH0MQ2q3ZxAPc3Dfz+aucPX8QAgjYuOqYJ30iLlWPFuViqwiO88x6fNczr59iMMdMNdBO86bX2BB7brkyg4z2nUwZU4fY6PSogESNJ+EzI808wbm3MWUl9YA6YM2EntyA5Lm9HjTUwOqeQuJ1QJgNuIdym9t9uqmUeMKDIMl5P8AxGqAeQEAzc9U31LwE2nzZvjUAggwPicd9r3KzOf8UuqfyqIMEwXzBI5xGyyOdcQYnFeVoLKTZgde73cvRVWGzKowj4TeC5oktkjbkbBedvhMyEObkjouSSHTzMC1ojYAdALLTursaL784/Pouc5XxDQa4Cq57TFzptJjyiOfr1TPFvETzUGHpA0mEAvP43Te/r80uO+6CyNSao3uZ57Tp071BqFywQ4mBMW2HdZr/qn/ALhx1PBii07NcPjrlnaWtZPrFlncILeu5InblKlYKmSZcPZJllZbi00YcssssqkO1GZ3W7y7GsqNAsHD92WNw+F5qz8Q0xHPexEzv8kOKW12DqamXuLqkH/j6/crmuc5mMQ6uXVHnzMbh9Di1kAnxHOG7pER/crzN87qYk/wdJv891jeG06Ra01KlZw+Boa4n09QDkM1zDDioW0T/LYNDXEQakb1T01GSByEDkqpRlVon0+3d6hOH8Wn/t1XjnEz8p+ytMNxJi2GHhtRv9VnexCpMNmjZ+Fx3sB/hSKmZvEPDBbk9gI9C0zb6pLjK6kimSxyXpNJQ42w4I8SnUYecQ8N9bg/IFWmH4pwLz/vt6w5lQE22gtErGYbNMJUjxsspOd/ypVsRQ/+ocQrnKclo1qwNHD+Ey3lL3VPU6nXWzx4oV8/BK8babfCNtksV6geB5GSW7wXGwIB6D/9dloimcJhxTaGjknlbjhtVHOm7Y4wWTGbOilHVSaYVdmb9To5CyOTqLBXZWNEInjzDuntHJEynMHoo2uBtkgiwREJR2Qiy8ENuCCDmILDxMDUptNPMpyleGmbDLIpYm3NUosSHNQOISZX1WKTldbS6Dsbe6FVllGe2EqLeOe5BP1Ki6eISZScLX1tnmLFGV2ISUlaOfJNOhvEU9QIXLuMOH3SXNv69/RdUVdm+XiqwhJ1GLerj2hmHK4SPPOJoFpI9j+iGDfpdIiYsD15LY8RcOOYSRcSeSx2Jw5BSIZFNUzpJL3RJjsSKlqz6kDkLD5bKYMRSa0Cm2NIJBPL+qOZTGFwTxh31qvlbZtKfic8m+nsAiwWVsf5nYtjGbuB1GpbkGD4j0uluMXxfH9hqnXKX/ZccEYRrqvj1idDZeQRIcKe8nlcj6qg4hxr6td1ZwhzjtIJAEDcAd+VhAkxK09PM2TTw1JsMIm5uWMlzQ7u5wkhZariBW1PcIMzbkNoW4ptyba4/lfsLlC/PP8AGWWBzGn5GRd5a3UTABJiSTsAbqTh87Y2oWlhcQSJ8R2kwYttOyyz3QlMvbnyRPTx7C/Gk3RucRxk64bhiHAWkkCec3ss/V4hxOIf4T6oZTe5ocGhoAbIEaomE5lmS1q7CZDaY3qVHFrAeg6+yep8P0Geb/qFMOHRlQAGbeYbiR0QwWON/IORPijUGnoomnTOhlWPEcJJqBuwdUJLi23wyB2VeMmY4/eQJ6QCnMjFWgxzqTaOLc2fDLK2oMsAf5XlMze8qFiXYthcKrjSLbEOozfnBJAPVTzxzu9w7HkVUkSn0WM8rQBOwAv7fL6KrzRwiAZmRM3tEmDyvHqjo1mnV5g5wAjrU1EBwaRMRvcjZKwNCpWfqc3fSAN4a0AAIVD8P1SHqW7gVk2XaiLf5K6vw7lopsBIAMfuVX8N5CGAOcL9CtQE7BjcpfiT/Q5+qzqXoj0BKYEmFIps5K5IhCe/S0u+SpXFWGY1ZsNgq53NLyvwbD5Et3TlJkJumJKlRCQMEgbpM3Sym3cljNClBBBYeLyk1LNJN03J3UqASO9qjuClVXKM8oGahlzVHrNUlN1BZKkrDTImGrGm6eXP0VwYIkbFVL6adwmJ0GD8J+ndFp8ux7ZdA5YblaJxCJOETcbJBC6SZE0VebZW2q0iP/PVcyz7hh9MlwEibRfnsuvqNjME2oLgKbNp93qjwx+DO8b+hwHMhUcRrcXQIAPIdhyTbaMAGSZO3SV1HiDhTUJYBO6xWJyyrSJsfkpHOUfTJUdXFPHPnyUGMc7xy+mYc0jSRy0hFjsWXeVrGtky7Q3TqPf3UyvhnG4YGnqJCi1abwAZMdevomRadfQ2UO/qKOG1Nlol4F2/mOqZw9MtklpJ7hJaX9T84T5rvO5n13RcrgJKLdk3iGvUqPDBamxrQxuzdpLvU9VVvbG5B+sKUCXDS4auk7j3UihlmoiQQO0JcZLHFJ+Anjttoq6NBz3eVxB6/nK0lB1fTo8Z7upe/UPQB02TuDyRzoDQR1H2/fdazI8gLdxPMR+aRmzufEeQUseJW+yjybh8zq+IxaNh1N9ytzkPD4ZDiIVll+WNpja+6sQmYtM29+Tl/BHm1Tl6Y8INoiyMIAJ1jFckRgpsTlZ2kd+f6JYsJ/YUKq+UTe1A9kV5kpgtT5CUximfI0bpU4SnhOOCS5DRo2E3y90fJNVNrJbYaQhziEEvRKCGjS0FRK8VRWPRtKbuBoffUSCUguRNcvWeDRPCKUEJ4Q5qaqNUhJcxC42amJw+ILLG7ft6KwEESLhVb2FHhahbsU7DncXtl0Bkxp8osCEmEulWDux/eyNzFcnZK1QyQomJy5j9wpxCSQhlFSVM1Nroy+L4XaZgAzeAAP3y+SpcTwiJJM33gem3uF0FEVLLSQ7XBRHUzj5OVO4MdP8AhEODXdfY7rqhaOiLSOiB6V/7mOWsmc6w/B3z94V5l/DWkCWieZWqhGs/o4v3OwZarIytwuTsb/iysadMNsBCVCMBPhijD2oS5N9gSmo2sTrWgbpqQNhsYnQ4D97Jh1bpbumXPWuo9gq5dDtarO2yZlAlBrbpEpWxqVCGtSkZTZN0DYQb3Jt70bymyUDZoglNgSE6EghLYQgkoIae6CymaPhyUggtMA4pwoILUeYAg1BBEYAlAoILDwgpppuiQQSCQZ8pspWGxc2+h/IoIJmLJKM6XQMopqyU14Ntj0QLEaC6BINliSWIILxoWlDSggsPA0owxEgsNHG00vQBujQWpGNjLsUNmie5UWrib3Mn6BBBbleyNoDH65cgFQlOMEoIKRtsqSHCg5yCCE0RN028oILGaE4JBCCCxo0QSmy5BBLNGw9BBBeNo//Z"/>
          </div>

          <div className="movie-card card5">
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
            <img  src="https://img.tenjo.tw/uploads/20170411233851_60.jpg"/>
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

