import { connect } from 'react-redux';
import { actions as ramenActions } from '../../../redux/ramenModule';
import { actions as imageActions } from '../../../redux/imageModule';
import result from './result';

const { getRestaurant } = ramenActions;

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.global.isLogin,
  id: ownProps.match.params.id,
  isFetching: state.global.isFetching,
  reqMsg: state.global.msg,
  currentRestaurant: state.ramen.currentRestaurant,
});

export default connect(mapStateToProps, { getRestaurant, imageActions })(result);
