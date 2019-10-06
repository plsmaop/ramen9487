import { connect } from 'react-redux';
import { actions } from '../../redux/globalModule';
import LoginPanel from './loginPanel';

const { userLogin, userRegister } = actions;
const mapStateToProps = state => ({
  isLogin: state.global.isLogin,
});

export default connect(mapStateToProps, { userLogin, userRegister })(LoginPanel);
