import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import { get } from '../../api';

class SearchListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
  }

  componentDidMount() {
    if (this.props.img.length > 0) {
      const url = this.props.img[0];
      get(`/image/${url}`).then((res) => {
        if (res.code === 0) {
          this.setState({ img: res.data.image.data });
        }
      }).catch(err => console.log(err));
    }
  }

  render() {
    const {
      name, address, totalScore,
      popularity, id,
    } = this.props;
    const { img } = this.state;
    return (
      <div className="movie-card">

        <div className="color-overlay">
          {
            img.length > 0 ? (<img src={img} />) : null
          }
          <div className="movie-content">
            <div className="movie-header">
              <h1 className="movie-title">
                {name}
              </h1>
              <h4 className="movie-info">
                {address}
              </h4>
            </div>
            <p className="movie-desc">
              <h5 className="search-ratings-h">
                Ratings:
                <div className="search-ratings">
                  {totalScore}
                </div>
              </h5>
              <h5 className="search-views-h">
                Views:
                <div className="search-views">
                  {popularity}
                </div>
              </h5>
            </p>
            <Link to={`/ramen/restaurant/${id}`}><a className="btn btn-outline" >See more...</a></Link>
            
          </div>
        </div>
      </div>
    );
  }
}

SearchListItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  totalScore: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(String).isRequired,
};
//       <img src={data} className="ramen-img" />
export default SearchListItem;
