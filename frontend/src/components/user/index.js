import { connect } from 'react-redux';
import { actions } from '../../redux/globalModule';
import LoginPanel from './loginPanel';

const { userLogin } = actions;

export default connect(null, { userLogin })(LoginPanel);
