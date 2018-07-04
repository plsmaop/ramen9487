import { connect } from 'react-redux';
import { actions as diaryActions } from '../../../redux/diaryModule';
import { actions as ramenActions } from '../../../redux/ramenModule';
import addRecord from './addRecord';

const { getRestaurantNameList } = ramenActions;
const { commitRamen } = diaryActions;

const mpaStateToProps = state => ({
  restaurantNameList: state.ramen.restaurantNameList,
  isFetching: state.global.isFetching,
  reqMsg: state.global.msg.content,
});

export default connect(mpaStateToProps, { getRestaurantNameList, commitRamen })(addRecord);
