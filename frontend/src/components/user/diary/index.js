import { connect } from 'react-redux';
import { actions as diaryActions } from '../../../redux/diaryModule';
import diary from './diary';


const { fetchDiary } = diaryActions;
const mapStateToProps = state => ({
  isLogin: state.global.isLogin,
  userInfo: state.global.userInfo,
  diary: state.diary.diary,
  isFetching: state.global.isFetching,
  id: state.global.userInfo.userId,
});

export default connect(mapStateToProps, { fetchDiary })(diary);
