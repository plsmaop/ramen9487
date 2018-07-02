import { connect } from 'react-redux';
import { actions } from '../../redux/ramenModule';
import search from './search';

const mapStateToProps = state => ({
  page: state.ramen.page,
  totalNumber: state.ramen.totalNumber,
  restaurantList: state.ramen.restaurantList,
});

export default connect(mapStateToProps, null)(search);
