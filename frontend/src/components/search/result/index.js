import { connect } from 'react-redux';
import result from './result';

const mapStateToProps = state => ({
  currentRestaurant: state.ramen.currentRestaurant,
});

export default connect(mapStateToProps, null)(result);
