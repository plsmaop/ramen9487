import { connect } from 'react-redux';
import { actions } from '../../../redux/ramenModule';
import comment from './comment';

const { postReview } = actions;
const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  name: ownProps.name,
  reqMsg: state.global.msg.content,
});

export default connect(mapStateToProps, { postReview })(comment);
