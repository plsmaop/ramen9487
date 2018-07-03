import { connect } from 'react-redux';
import { actions } from '../../../redux/imageModule';
import AddForm from './addForm';

const { updateImage, uploadImage } = actions;
const mapStateToProps = state => ({
  fetchedData: state.image.fetchedData,
  isFetching: state.global.isFetching,
});

export default connect(mapStateToProps, { updateImage, uploadImage })(AddForm);
