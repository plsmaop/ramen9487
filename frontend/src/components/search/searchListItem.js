import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SearchListItem = (props) => {
  const {
    name, address, totalScore,
    popularity,
  } = props;
  return (
    <div className="movie-card">
      <div className="color-overlay">
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
          <a className="btn btn-outline" href="#">See more...</a>
        </div>
      </div>
    </div>
  );
};

SearchListItem.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  totalScore: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
};

export default SearchListItem;
