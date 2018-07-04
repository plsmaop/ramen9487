import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../../loadingScreen';
import Comment from '../comment';
import './style.css';
import Map from './googlemap';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 'heart',
      addReview: false,
      address: '台北市中山區南京東路一段29號',
      lat: '',
      lan: '',
    };
    this.handleAddReview = this.handleAddReview.bind(this);
    this.toggleHeartClass = this.toggleHeartClass.bind(this);
  }

  componentDidMount() {
    this.props.getRestaurant(this.props.id);
    this.props.getRestaurantReviews(this.props.id);

    console.log(this.state.address)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}&key=AIzaSyCT-UUYx-crn1WAFAyK9KH04ScNCH3GyFw`)
      .then(response => {
          if(response.ok){
            return response.json()
          }else{
          throw new Error('Something went wrong...')
        }
      })
      .then(data => {
        console.log(/* data.results[0].geometry.location */data)
        this.setState({
        lat: data.results[0].geometry.location.lat,
        lan: data.results[0].geometry.location.lng,
      })})
  }

  toggleHeartClass() {
    if (this.state.like === undefined) this.setState({"like": "heart"})
    let like_button_class = (this.state.like === "heart") ? "heart-clicked":"heart";
    this.setState( {like: like_button_class} );
  }

  handleAddReview() {
    this.setState({ addReview: true });
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching || !this.props.currentRestaurant.menu) return (<LoadingScreen color="#FF5722" type="拉麵載入中..." />);
    const {
      name, totalScore, popularity,
      address, menu, tag,
      location, url,
    } = this.props.currentRestaurant;
    const { addReview } = this.state;
    const { id } = this.props;
    if (addReview) return (<Comment id={id} name={name} />);
    const img = null;
    const { currentRestaurantReviews } = this.props;
    const review = currentRestaurantReviews.length > 0 ? currentRestaurantReviews.map(i => i.content) : [];
    
    return(
      <div className="result-page">
        <div className="result-wrapper">

          <div className="result-block result-summary">
            <div className="result-summaryCard">
              
              <div className="result-color-overlay">
                <div className="movie-content">
                  <div className="movie-header">
                    <h1 className="movie-title">{name}</h1>
                  </div>
                  <p className="store-desc">
                    <h5 className="search-ratings-h">Ratings: <div className="search-ratings">{(Math.floor(Number(totalScore)*100)) / 100}</div></h5>
                    <h5 className="search-views-h">Views: <div className="search-views">{Number(popularity)}</div></h5>
                  </p>

                  <div className="summary-footer">
                    <div ref="like-button" className={this.state.like} onClick={this.toggleHeartClass}>♥</div>
                  </div>

                </div>
              </div>
            </div>
            {
              img
            }
          </div>

          <div className="result-block result-sidebar">
            <div className="result-basic">

              <div className="icon-info-wrap">
                <div className="result-icon location"></div>
                <div className="result-ans">{address}</div>
              </div>
              <div className="icon-info-wrap">
                <div className="result-icon web"></div>
                <div className="result-ans web-ans"><a href={url}>點我</a></div>
              </div>
              <div className="icon-info-wrap wrap-menu">
                <div className="result-icon result-menu"></div>
                <div className="result-ans menu-ans">
                  <article>
                    {
                      menu.map(item => (
                        <div className="menu-title">
                          <span>{item}</span>
                        </div>
                      ))
                    }    
                  </article>
                </div>
              </div>
              <div className="icon-info-wrap wrap-tags">
                <div className="result-icon near-mrt"></div>
                  <ul className="tags">
                    {
                      location.map(item => (
                        <div className="tag">
                          <span>{item}</span>
                        </div>
                      ))
                    }

                  </ul>
                
              </div>

              <div className="icon-info-wrap wrap-tags">
                <div className="result-icon category"></div>
                
                  <ul className="tags">
                    {
                      tag.map(item => (
                        <div className="tag">
                          <span>{item}</span>
                        </div>
                      ))
                    }

                  </ul>           
              </div>
              <div className="icon-info-wrap wrap-comment">
                <div className="result-icon ps"></div>
                <div className="result-ans comment-ans">
                {
                  review.map(i => (
                    <div className="comment-element">{i}</div>
                  ))
                }
                {/* <div className="comment-element">fuck</div>   */}                    
              </div> 
              </div>
              <div className="icon-info-wrap ">
                <div className="addComment-result" onClick={this.handleAddReview}>
                  Comment
                  <svg className="addComment-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                    <rect x='0' y='0' fill='none' width='130' height='65'/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="result-block result-info1">
            <Map lat={this.state.lat} lan={this.state.lan}/>
          </div>
          
          {/* <div className="result-block result-info2"></div> */}
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  currentRestaurant: PropTypes.object.isRequired,
  isLogin: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  reqMsg: PropTypes.object.isRequired,
  getRestaurant: PropTypes.func.isRequired,
  fetchImage: PropTypes.func.isRequired,
  getRestaurantReviews: PropTypes.func.isRequired,
  currentRestaurantReviews: PropTypes.arrayOf(Object).isRequired,
};

export default SearchResult;

/*

            <div className="icon-info-wrap">
              <div className="result-icon phone"></div>
              <div className="result-ans">02 2370 3978</div>
            </div>

            <div className="icon-info-wrap">
              <div className="result-icon open-hours"></div>
              <div className="result-ans open-hours-ans">11:00 - 22:00</div>
              <ul className="result-all-open-hours">
                <li>
                  <div className="result-day">Mon</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Tue</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Wed</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Thu</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Fri</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Sat</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>

                <li>
                  <div className="result-day">Sun</div>
                  <div className="result-time">11:00 - 22:00</div>
                </li>
              </ul >
            </div> 

            <div className="menu-title">
                    <span>叉燒味玉醬油拉麵</span>
                    <span className="menu-price">$385</span>
                  </div>
                  <div className="menu-title">
                    <span>叉燒味玉鹽味拉麵</span>
                    <span className="menu-price">$360</span>
                  </div>
                  <div className="menu-title">
                    <span>秘味噌拉麵</span>
                    <span className="menu-price">$330</span>
                  </div>
                  <div className="menu-title">
                    <span>燒烤梅花丼</span>
                    <span className="menu-price">$100</span>
                  </div>
                  <div className="menu-title">
                    <span>秘味噌胡麻拌麵</span>
                    <span className="menu-price">$300</span>
                  </div>

                              <div className="icon-info-wrap wrap-tags">
              <div className="result-icon other-info"></div>
              
                <ul className="tags">
                  <li><div className="tag">預約</div></li>
                  <li><div className="tag">外帶</div></li>
                  <li><div className="tag">刷卡</div></li>
                  <li><div className="tag">親子</div></li>
                </ul>
              
            </div>

                              <li><div className="tag">象山</div></li>
                  <li><div className="tag">國父紀念館</div></li>
                  <li><div className="tag">南港軟體園區</div></li>
                  <li><div className="tag">中正紀念堂</div></li>

                                    <li><div className="tag">豚骨</div></li>
                  <li><div className="tag">醬油</div></li>
                  <li><div className="tag">沾麵</div></li>
                  <li><div className="tag">家系</div></li>
*/