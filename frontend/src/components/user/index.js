import { connect } from 'react-redux';
import { actions } from '../../redux/globalModule';
import LoginPanel from './loginPanel';

const { userLogin, userRegister } = actions;

export default connect(null, { userLogin, userRegister })(LoginPanel);
