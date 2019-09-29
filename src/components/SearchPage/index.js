import React from 'react';
import './style.scss';
import '../FrontPage/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaQuery from 'react-responsive';

var MRTs = ["西湖", "市政府", "國父紀念館", "忠孝敦化", "台北小巨蛋", "忠孝復興", "古亭", "公館", "中正紀念堂", "台北車站", "中山"]
var Tags = ["豚骨", "醬油", "味噌", "煮干", "家系", "鷄白湯", "沾麵", "拌麵"]
var bg1 = require('../img/ramen1.jpg');
var bg2 = require('../img/ramen2.jpeg');
var bg3 = require('../img/ramen3.jpeg');
class Search extends React.Component {
  constructor(props){
    super(props);

    this.state={
      maxwidth876: window.innerWidth <= 876,
      selectedStations: [],
      selectedCategories: [],
      openFilter: 0,
      openHideSearch: 0,
      openMenu: 0
    };

    this.onStationClicked = this.onStationClicked.bind(this);
    this.onCategoryClicked = this.onCategoryClicked.bind(this);
    this.onFilterClicked = this.onFilterClicked.bind(this);
    this.onSearchIconClicked = this.onSearchIconClicked.bind(this);
    this.onMenuClicked = this.onMenuClicked.bind(this);
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  updateWindowSize() {
    this.setState({
      maxwidth876: window.innerWidth <= 876,
    });
    if(window.innerWidth>876){
      this.setState({
        openFilter: 0,
        openHideSearch: 0,
        openMenu: 0
      });
    }
}

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowSize);
  }

  onStationClicked(station){
    const selected = this.state.selectedStations.slice();
    selected.indexOf(station) === -1 ? selected.push(station) : selected.splice(selected.indexOf(station),1);
    this.setState({
        selectedStations: selected
    });
  }

  onCategoryClicked(category){
      const selected = this.state.selectedCategories.slice();
      selected.indexOf(category) === -1 ? selected.push(category) : selected.splice(selected.indexOf(category),1);
      this.setState({
          selectedCategories: selected
      });
  }
  
  onFilterClicked(){
    var openFilter = !this.state.openFilter;
    this.setState({
      openFilter: openFilter
    });
  }

  onSearchIconClicked(){
    var openHideSearch = !this.state.openHideSearch;    
    this.setState({
      openHideSearch: openHideSearch
    });
  }

  onMenuClicked(){
    var openMenu = !this.state.openMenu;
    this.setState({
      openMenu: openMenu
    });
  }

  render(){
    return(
      <div className="searchPage position--rel">
        <div className={["alertOverlay", "position--abs",this.state.openFilter || this.state.openMenu ? "display--block":"display--none"].join(' ')}></div>
        
        <div className={["searchPage__hideMenu","position--abs","flex__container--col","alignitems--center","width--60per",this.state.openMenu ? "" : "display--none"].join(' ')}>
          <div className="searchPage__hideMenuli">
            <FontAwesomeIcon icon="times" className="fontsize--22 marginLeft--30px cursor--pt" onClick={()=>this.onMenuClicked()}/>
          </div>
          <div className="searchPage__hideMenuli flex__container--row alignitems--center  cursor--pt">
            <div className="searchPage__hideMenuli--wrap flex__container--row justifycontent--fs alignitems--center">
                <FontAwesomeIcon icon="user" className="marginRight--30px marginLeft--30px"/>
                <div className="searchPage__hideMenuli--logina flex__container--col justifycontent--center">登入</div>
            </div>
          </div>
          
        </div>
        
        <div className={["filterPanel position--abs ", "flex__container--col", "justifycontent--fs", "alignitems--center",this.state.openFilter ? "":"display--none"].join(' ')}>
          <div className="filterPanel__header flex__container--row justifycontent--center alignitems--center position--rel">
            <div className="filterPanel__title">Filter</div>
            <div className="filterPanel__exit position--abs cursor--pt" onClick={() => this.onFilterClicked()}>
              <FontAwesomeIcon icon="times"/>
            </div>
          </div>
          <div className="filterPanel__Wrap flex__container--col justifycontent--fs">
            <div className="filterPanel__titleWrap flex__container--row justifycontent--fs alignitems--center">
                <FontAwesomeIcon icon="subway"/>
                <div className="flex__container--col justifycontent--center alignitems--center">捷運站</div>
            </div>
            <span></span>
            <div className="filterPanel__tagWrap flex__container--row justifycontent--fs alignitems--center flex-wrap">
            {MRTs.map((station,index) => {
              return(
                <div className="flex__container--col justifycontent--center alignitems--center cursor--pt" 
                  onClick={() => this.onStationClicked(station)} 
                  style={{backgroundColor:this.state.selectedStations.indexOf(station) === -1 ? '':'rgba(255,99,71,0.9)',color:this.state.selectedStations.indexOf(station) === -1 ? '':'white'}}>
                  {station}
                </div>
              )
            })}
            </div>
          </div>
          
          <div className="filterPanel__Wrap flex__container--col justifycontent--fs">
            <div className="filterPanel__titleWrap flex__container--row justifycontent--fs alignitems--center">
                <FontAwesomeIcon icon="tag"/>
                <div className="flex__container--col justifycontent--center alignitems--center">拉麵分類</div>
            </div>
            <span></span>
            <div className="filterPanel__tagWrap flex__container--row justifycontent--fs alignitems--center flex-wrap">
              {Tags.map((tag,index) => {
                return(
                  <div className="flex__container--col justifycontent--center alignitems--center cursor--pt" 
                    onClick={() => this.onCategoryClicked(tag)} 
                    style={{backgroundColor:this.state.selectedCategories.indexOf(tag) === -1 ? '':'rgba(255,99,71,0.9)',color:this.state.selectedCategories.indexOf(tag) === -1 ? '':'white'}}>
                    {tag}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="filterPanel__buttonWrap flex__container--col justifycontent--center alignitems--center">
              <div className="cursor--pt flex__container--col justifycontent--center alignitems--center">Apply</div>
          </div>
        </div>

        

        <div className="frontpage__nav flex__container--row justifycontent--sb alignitems--center">
            <div className="frontpage__nav--firstPart flex__container--row justifycontent--fs alignitems--center">
              <div className="frontpage__nav--slogan flex__container--col justifycontent--center fontfamily--mono cursor--pt">No Ramen No Life</div>
              <div className="frontpage__nav--searchContainer flex__container--col justifycontent--center alignitems--center">
                <div className="frontpage__nav--search-box flex__container--row justifycontent--sb alignitems--center">
                  <input placeholder="請輸入拉麵名稱..."/>
                  <button className="cursor--pt">
                    <FontAwesomeIcon icon="search"/>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="frontpage__nav--wrap flex__container--row justifycontent--fs alignitems--center cursor--pt">
                <FontAwesomeIcon icon="user"/>
                <div className="frontpage__nav--logina flex__container--col justifycontent--center">登入</div>
            </div>

            <div className="frontpage__nav--narrow flex__container--row justifycontent--fe alignitems--center display--none">
              <FontAwesomeIcon icon="search" className="searchIcon cursor--pt fontsize--22 marginRight--1rem" onClick={() => this.onSearchIconClicked()}/>
              <FontAwesomeIcon icon="bars" className="barsIcon cursor--pt fontsize--22 marginRight--1rem" onClick={() => this.onMenuClicked()}/>
            </div>
        </div>



        <div className={["searchPage__hideSearch","justifycontent--center",this.state.openHideSearch ? "flex__container--row" : "display--none"].join(' ')}>
          <div className="frontpage__nav--search-box flex__container--row justifycontent--sb alignitems--center">
            <input placeholder="請輸入拉麵名稱..."/>
            <button className="cursor--pt">
              <FontAwesomeIcon icon="search"/>
            </button>
          </div>
        </div>




        <div className="searchPage__engine flex__container--col justifycontent--fs alignitems--center">
          <div className="searchPage__engine--form flex__container--col justifycontent--fs">
            <div className="searchPage__engine--formTarget flex__container--col justifycontent--fe bold">搜尋：鳥人拉麵</div>
            <div className="searchPage__engine--formTextWrap flex__container--row justifycontent--fs ">
              <div className="searchPage__engine--formText flex__container--col justifycontent--fs bold">共</div>
              <div className="searchPage__engine--formNumber flex__container--col justifycontent--fs bold">3</div>
              <div className="searchPage__engine--formText flex__container--col justifycontent--fs bold">項結果</div>
              
            </div>
            <div className="searchPage__engine--hideButton flex__container--col justifycontent--center alignitems--center display--none">
                <button className="cursor--pt" onClick={() => this.onFilterClicked()}>Filter</button>
            </div>
          </div>
          
          


          <div className="searchPage__engine--wrap flex__container--row justifycontent--center alignitems--center flex-wrap">
            <div className="searchPage__engine--filters flex__container--col justifycontent--fs alignitems--center">
              
              <div className="searchPage__engine--filter flex__container--col justifycontent--fs alignitems--center">
                <div className="searchPage__engine--filterTitle flex__container--row justifycontent--fs alignitems--center">
                  <FontAwesomeIcon icon="subway"/>
                  <div className="searchPage__engine--text flex__container--col justifycontent--center alignitems--center">捷運站</div>
                </div>
                <div className="searchPage__engine--filterTags flex__container--row justifycontent--fs alignitems--center flex-wrap">
                  {MRTs.map((station,index) => {
                    return(
                      <div className="searchPage__engine--filterTag flex__container--col justifycontent--center alignitems--center cursor--pt" 
                        onClick={() => this.onStationClicked(station)} 
                        style={{backgroundColor:this.state.selectedStations.indexOf(station) === -1 ? '':'rgba(255,99,71,0.9)',color:this.state.selectedStations.indexOf(station) === -1 ? '':'white'}}>
                        {station}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="searchPage__engine--filter flex__container--col justifycontent--center alignitems--center">
                <div className="searchPage__engine--filterTitle flex__container--row justifycontent--fs alignitems--center">
                  <FontAwesomeIcon icon="tag"/>
                  <div className="searchPage__engine--text flex__container--col justifycontent--center alignitems--center">拉麵分類</div>
                </div>
                <div className="searchPage__engine--filterTags flex__container--row justifycontent--fs alignitems--center flex-wrap">
                  {Tags.map((tag,index) => {
                    return(
                      <div className="searchPage__engine--filterTag flex__container--col justifycontent--center alignitems--center cursor--pt" 
                        onClick={() => this.onCategoryClicked(tag)} 
                        style={{backgroundColor:this.state.selectedCategories.indexOf(tag) === -1 ? '':'rgba(255,99,71,0.9)',color:this.state.selectedCategories.indexOf(tag) === -1 ? '':'white'}}>
                        {tag}
                      </div>
                    )
                  })}
                </div>
              </div>


            </div>
            <div className="searchPage__engine--results flex__container--col justifycontent--fs alignitems--center">
                <div className="searchPage__engine--resultCard flex__container--row justifycontent--fs alignitems--center position--rel">
                   <div className="searchPage__engine--overlay position--abs">
                  </div> 
                  <div className="searchPage__engine--img" style={{backgroundImage:"url("+bg1+")"}}></div>
                  <div className="searchPage__engine--info flex__container--col justifycontent--fs alignitems--center">
                    <div className="searchPage__engine--infoTitle flex__container--col justifycontent--center">山嵐拉麵 台灣分店 YAMAARASHI 忠孝店</div>
                    <div className="searchPage__engine--infoAddress">台北市大安區大安路一段51巷29號</div> 
                    <div className="searchPage__engine--infoWrap flex__container--row justifycontent--sb alignitems--center">
                      <div className="searchPage__engine--infoRating flex__container--row justifycontent--fs alignitems--center">
                        <div className="searchPage__engine--infoRatingNumber flex__container--col justifycontent--center">4.3</div>
                        <div className="searchPage__engine--infoRatingStars  position--rel">
                          <div className="searchPage__engine--infoRatingTopstar flex__container--row alignitems--center position--abs" style={{width: '86%'}}>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                          <div className="searchPage__engine--infoRatingBottomstar flex__container--row alignitems--center">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                        </div>
                      </div>

                      <a className="searchPage__engine--infoLink flex__container--row alignitems--center" >➔</a>
                    </div>
                  </div>
                </div>

                <div className="searchPage__engine--resultCard flex__container--row justifycontent--fs alignitems--center position--rel">
                   <div className="searchPage__engine--overlay position--abs">
                  </div> 
                  <div className="searchPage__engine--img" style={{backgroundImage:"url("+bg2+")"}}></div>
                  <div className="searchPage__engine--info flex__container--col justifycontent--fs alignitems--center">
                    <div className="searchPage__engine--infoTitle flex__container--col justifycontent--center">TOTTO RAMEN 鳥人拉麵 - 台灣</div>
                    <div className="searchPage__engine--infoAddress">台北市大安區復興南路一段107巷5弄9號</div> 
                    <div className="searchPage__engine--infoWrap flex__container--row justifycontent--sb alignitems--center">
                      <div className="searchPage__engine--infoRating flex__container--row justifycontent--fs alignitems--center">
                        <div className="searchPage__engine--infoRatingNumber flex__container--col justifycontent--center">4</div>
                        <div className="searchPage__engine--infoRatingStars  position--rel">
                          <div className="searchPage__engine--infoRatingTopstar flex__container--row alignitems--center position--abs" style={{width: '80%'}}>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                          <div className="searchPage__engine--infoRatingBottomstar flex__container--row alignitems--center">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                        </div>
                      </div>

                      <a className="searchPage__engine--infoLink flex__container--row alignitems--center" >➔</a>
                    </div>
                  </div>
                </div>

                <div className="searchPage__engine--resultCard flex__container--row justifycontent--fs alignitems--center position--rel">
                   <div className="searchPage__engine--overlay position--abs">
                  </div> 
                  <div className="searchPage__engine--img" style={{backgroundImage:"url("+bg3+")"}}></div>
                  <div className="searchPage__engine--info flex__container--col justifycontent--fs alignitems--center">
                    <div className="searchPage__engine--infoTitle flex__container--col justifycontent--center">鷹流東京豚骨拉麺【極匠GOKUJOH】公館店</div>
                    <div className="searchPage__engine--infoAddress">台北市汀州路三段104巷4</div> 
                    <div className="searchPage__engine--infoWrap flex__container--row justifycontent--sb alignitems--center">
                      <div className="searchPage__engine--infoRating flex__container--row justifycontent--fs alignitems--center">
                        <div className="searchPage__engine--infoRatingNumber flex__container--col justifycontent--center">3.38</div>
                        <div className="searchPage__engine--infoRatingStars  position--rel">
                          <div className="searchPage__engine--infoRatingTopstar flex__container--row alignitems--center position--abs" style={{width: '67.6%'}}>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                          <div className="searchPage__engine--infoRatingBottomstar flex__container--row alignitems--center">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                          </div>
                        </div>
                      </div>

                      <a className="searchPage__engine--infoLink flex__container--row alignitems--center" >➔</a>
                    </div>
                  </div>
                </div>


            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Search;