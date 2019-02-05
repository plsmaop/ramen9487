import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MRTLine from './MRTLine/index';
import Categories from './Categories/index';

var MRTs = ["西湖", "市政府", "國父紀念館", "忠孝敦化", "台北小巨蛋", "忠孝復興", "古亭", "公館", "中正紀念堂", "台北車站", "中山"]
var Tags = ["豚骨", "醬油", "味噌", "煮干", "家系", "鷄白湯", "沾麵", "拌麵"]

//const Home = () => (
class Home extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedStations: [],
                selectedCategories: [],
                showMRTSelect: 0,
                showCategorySelect: 0,
                selectedLine: ''
            };

            this.onMRTDisplayClicked = this.onMRTDisplayClicked.bind(this);
            this.onCategoryDisplayClicked = this.onCategoryDisplayClicked.bind(this);
            this.onLineClicked = this.onLineClicked.bind(this);
            this.onStationClicked = this.onStationClicked.bind(this);
            this.onCategoryClicked = this.onCategoryClicked.bind(this);
        }

        onMRTDisplayClicked() {
            this.setState({
                showMRTSelect: !this.state.showMRTSelect,
                showCategorySelect: 0
              });
        }

        onCategoryDisplayClicked(){
            this.setState({
                showMRTSelect: 0,
                showCategorySelect: !this.state.showCategorySelect
            })
        }

        onLineClicked(line){
            this.setState({
                selectedLine: line
            });
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


        render() {
            return (
              <div className="frontpage">
                <div className="frontpage__nav flex__container--row justifycontent--sb alignitems--center">
                    <div className="frontpage__nav--slogan flex__container--col justifycontent--center fontfamily--mono cursor--pt">No Ramen No Life</div>
                    <div className="frontpage__nav--wrap flex__container--row justifycontent--fs alignitems--center cursor--pt">
                        <FontAwesomeIcon icon="user"/>
                        <div className="frontpage__nav--logina flex__container--col justifycontent--center">登入</div>
                    </div>
                </div>
                <div className="frontpage__image">
                    
                    <div className="frontpage__search">
                        
                         <div className="frontpage__panel flex__container--col justifycontent--sa">

                            <div className="frontpage__panel--wrap flex__container--col justifycontent--center">
                                <div className="frontpage__panel--subtitle">餐廳名稱</div>
                                <input ></input>
                            </div>

                            <div className="frontpage__panel--wrap flex__container--col justifycontent--center">
                                <div className="frontpage__panel--subtitle cursor--pt">捷運站</div>
                                <div className="frontpage__panel--display flex__container--row justifycontent--fs alignitems--center cursor--pt" onClick={this.onMRTDisplayClicked}>
                                    {this.state.selectedStations.slice(0,2).map((station,index) => {
                                        return(
                                            <div className="flex__container--row justifycontent--sa alignitems--center border--tomato">
                                            {station}
                                            </div>
                                        )
                                    })}
                                    {this.state.selectedStations.length > 2 ? (<div className="flex__container--row justifycontent--sa alignitems--center">......</div>) : null}
                                </div>
                            </div>

                            <div className="frontpage__panel--wrap flex__container--col justifycontent--center">
                                <div className="frontpage__panel--subtitle cursor--pt">拉麵分類</div>
                                <div className="frontpage__panel--display flex__container--row justifycontent--fs alignitems--center cursor--pt" onClick={this.onCategoryDisplayClicked}>
                                    {this.state.selectedCategories.slice(0,3).map((category,index) => {
                                        return(
                                            <div className="flex__container--row justifycontent--sa alignitems--center border--tomato">
                                            {category}
                                            </div>
                                        )
                                    })}
                                    {this.state.selectedCategories.length > 3 ? (<div className="flex__container--row justifycontent--sa alignitems--center">......</div>) : null}
                                </div>
                            </div>

                            <div className="frontpage__panel--wrap flex__container--row justifycontent--center alignitems--center">
                                <div className="frontpage__panel--button cursor--pt flex__container--row justifycontent--center alignitems--center" >搜尋</div>
                            </div>

                        </div>      

                    </div>
                    
                    
                    <div className= {["frontpage__multiselect--mrt","flex__container--col", this.state.showMRTSelect ? "display--block" : "display--none"].join(' ')}>
                        <div className="frontpage__multiselect--title ">捷運站</div>
                        <div className="frontpage__multiselect--wrap flex__container--col justifycontent--fs">
                            <MRTLine
                                line="blue"
                                selectedStations={this.state.selectedStations}
                                selectedLine={this.state.selectedLine}
                                onLineClicked={this.onLineClicked}
                                onStationClicked={this.onStationClicked}
                            />
                             <MRTLine
                                line="brown"
                                selectedStations={this.state.selectedStations}
                                selectedLine={this.state.selectedLine}
                                onLineClicked={this.onLineClicked}
                                onStationClicked={this.onStationClicked}
                            />
                            <MRTLine
                                line="red"
                                selectedStations={this.state.selectedStations}
                                selectedLine={this.state.selectedLine}
                                onLineClicked={this.onLineClicked}
                                onStationClicked={this.onStationClicked}
                            />
                            <MRTLine
                                line="green"
                                selectedStations={this.state.selectedStations}
                                selectedLine={this.state.selectedLine}
                                onLineClicked={this.onLineClicked}
                                onStationClicked={this.onStationClicked}
                            />
                            <MRTLine
                                line="yellow"
                                selectedStations={this.state.selectedStations}
                                selectedLine={this.state.selectedLine}
                                onLineClicked={this.onLineClicked}
                                onStationClicked={this.onStationClicked}
                            />  
                                 
                        </div>
                    </div>

                    <div className= {["frontpage__multiselect--mrt","flex__container--col", this.state.showCategorySelect ? "display--block" : "display--none"].join(' ')}>
                        <div className="frontpage__multiselect--title">拉麵分類</div>
                        <div className="frontpage__multiselect--wrap flex__container--col justifycontent--fs">
                            <Categories
                                selectedCategories={this.state.selectedCategories}
                                onCategoryClicked={this.onCategoryClicked}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="frontpage__content flex__container--col justifycontent--sb alignitems--center">
                    <div className="frontpage__content--wrap flex__container--col justifycontent--fs alignitems--center">
                        <div className="frontpage__content--titleWrap flex__container--col justifycontent--fs alignitems--center">
                            <div className="frontpage__content--title">如何使用</div>
                            <span></span>
                        </div>
                        
                        <div className="frontpage__content--gallery flex__container--row justifycontent--sa alignitems--fs">
                            <div className="frontpage__content--block flex__container--col justifycontent--sb alignitems--center  ">
                                <FontAwesomeIcon icon="search" size="5x" style={{flex:'4',color:'tomato',height:'70%'}}/>
                                <div>搜尋台北市好吃的拉麵，可以依店名、捷運站、分類做篩選。</div>
                            </div>
                            <div className="frontpage__content--block flex__container--col justifycontent--sb alignitems--center ">
                                <FontAwesomeIcon icon="address-book" size="5x" style={{flex:'4',color:'tomato',height:'70%'}}/>
                                <div>擁有自己的拉麵日記，紀錄吃拉麵的習慣以及收藏喜愛的店家。</div>
                            </div>
                            <div className="frontpage__content--block flex__container--col justifycontent--sb alignitems--center ">
                                <FontAwesomeIcon icon="database" size="5x" style={{flex:'4',color:'tomato',height:'70%'}}/>
                                <div>使用 API 以取得資料。</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="frontpage__content--wrap flex__container--col justifycontent--fs alignitems--center">
                        <div className="frontpage__content--titleWrap flex__container--col justifycontent--fs alignitems--center">
                            <div className="frontpage__content--title">探索捷運商圈</div>
                            <span></span>
                        </div>
                        
                        <div className="frontpage__content--gallery flex__container--row justifycontent--sb alignitems--fs">
                            <div className="frontpage__content--image  cursor--pt gallery_1">
                                <div className="frontpage__content--stationName flex__container--row justifycontent--center alignitems--center">忠孝復興</div>
                            </div>
                            <div className="frontpage__content--image cursor--pt gallery_2">
                                <div className="frontpage__content--stationName flex__container--row justifycontent--center alignitems--center">市政府</div>
                            </div>
                            <div className="frontpage__content--image cursor--pt gallery_3">
                                <div className="frontpage__content--stationName flex__container--row justifycontent--center alignitems--center">公館</div>
                            </div>
                            <div className="frontpage__content--image cursor--pt gallery_4">
                                <div className="frontpage__content--stationName flex__container--row justifycontent--center alignitems--center">台北小巨蛋</div>
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








              
                            {/* <div className="frontpage__multiselect--list flex__container--row justifycontent--fs alignitems--center cursor--pt" >
                                <span className="span--blue"></span>
                                <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">板南線</div>
                                <i className={["frontpage__multiselect--arrow","flex-container--col", this.state.arrowDown ? "down" : "up"].join(' ')}></i>
                            </div>
                            <ul>
                                <li>市政府</li>
                                <li>國父紀念館</li>
                                <li>忠孝敦化</li>
                                <li>忠孝復興</li>
                                <li>台北車站</li>
                            </ul> 

                            <div className="frontpage__multiselect--list flex__container--row justifycontent--fs alignitems--center cursor--pt" >
                                <span className="span--brown"></span>
                                <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">文湖線</div>
                                <i className={["frontpage__multiselect--arrow","flex-container--col", this.state.arrowDown ? "down" : "up"].join(' ')}></i>
                            </div>
                            <ul>
                                <li>西湖</li>
                                <li>忠孝復興</li>
                            </ul>

                            <div className="frontpage__multiselect--list flex__container--row justifycontent--fs alignitems--center cursor--pt" >
                                <span className="span--red"></span>
                                <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">淡水信義線</div>
                                <i className={["frontpage__multiselect--arrow","flex-container--col", this.state.arrowDown ? "down" : "up"].join(' ')}></i>
                            </div>
                            <ul>
                                <li>中正紀念堂</li>
                                <li>台北車站</li>
                                <li>中山</li>
                            </ul>

                            <div className="frontpage__multiselect--list flex__container--row justifycontent--fs alignitems--center cursor--pt" >
                                <span className="span--green"></span>
                                <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">松山新店線</div>
                                <i className={["frontpage__multiselect--arrow","flex-container--col", this.state.arrowDown ? "down" : "up"].join(' ')}></i>
                            </div>
                            <ul>
                                <li>台北小巨蛋</li>
                                <li>古亭</li>
                                <li>公館</li>
                                <li>中正紀念堂</li>
                                <li>中山</li>
                            </ul>

                            <div className="frontpage__multiselect--list flex__container--row justifycontent--fs alignitems--center cursor--pt" >
                                <span className="span--yellow"></span>
                                <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">中和新蘆線</div>
                                <i className={["frontpage__multiselect--arrow","flex-container--col", this.state.arrowDown ? "down" : "up"].join(' ')}></i>
                            </div>
                            <ul>
                                <li>古亭</li>
                            </ul>*/}