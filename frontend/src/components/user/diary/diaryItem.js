import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { get } from '../../../api';

class DiaryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      im: '',
    };
  }

  componentDidMount() {
    if (this.props.img.length > 0) {
      const url = this.props.img[0];
      get(`/image/${url}`).then((res) => {
        if (res.code === 0) {
          this.setState({ im: res.data.image.data });
        }
      }).catch(err => console.log(err));
    }
  }

  render() {
    const { im } = this.state;
    const { _id, img, name } = this.props;
    const m = im.length === 0 ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/500px-Solid_white.svg.png'
      : im;
    return (
        <Link to={`/ramen/restaurant/${_id}`} >
        <div className="diary-favorite-element ">
          <img src={m} />
          <div className="diary-favorite-name"><p>{name}</p></div>
        </div>
        </Link>
    );
  }
}

DiaryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(String).isRequired,
  name: PropTypes.string.isRequired,
}

export default DiaryItem;