import { connect } from 'react-redux';
import { actions as imageActions } from '../../../redux/imageModule';
import { actions as ramenActions } from '../../../redux/ramenModule';
import AddForm from './addForm';

const { updateImage, uploadImage } = imageActions;
const { postNewRestaurant } = ramenActions;
const mapStateToProps = state => ({
  fetchedData: state.image.fetchedData,
  isFetching: state.global.isFetching,
});

export default connect(mapStateToProps, { updateImage, uploadImage, postNewRestaurant })(AddForm);
