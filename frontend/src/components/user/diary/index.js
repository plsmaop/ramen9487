import { connect } from 'react-redux';
import diary from './diary';

const mapStateToProps = state => ({
  isLogin: state.global.isLogin,
});

export default connect(mapStateToProps, null)(diary);
