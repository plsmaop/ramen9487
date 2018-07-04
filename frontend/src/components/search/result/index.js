import { connect } from 'react-redux';
import { actions as ramenActions } from '../../../redux/ramenModule';
import { actions as imageActions } from '../../../redux/imageModule';
import { actions as diaryActions } from '../../../redux/diaryModule';
import result from './result';

const { getRestaurant, getRestaurantReviews } = ramenActions;
const { fetchImage } = imageActions;
const { addFavorite } = diaryActions;

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.global.isLogin,
  id: ownProps.match.params.id,
  isFetching: state.global.isFetching,
  reqMsg: state.global.msg,
  currentRestaurant: state.ramen.currentRestaurant,
  currentRestaurantReviews: state.ramen.currentRestaurantReviews,
});

export default connect(mapStateToProps, {
  getRestaurant, fetchImage, getRestaurantReviews, addFavorite,
})(result);
