// action types
export const actionsTypes = {
  UPDATE_IMAGE: 'UPDATE_IMAGE',
  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
  FETCH_IMAGE: 'FETCH_IMAGE',
  RECIEVE_IMAGE: 'RECIEVE_IMAGE',
  CLEAR_IMAGE: 'CLEAR_IMAGE',
};

// action creators
export const actions = {
  updateImage: data => ({
    type: actionsTypes.UPDATE_IMAGE,
    data,
  }),
  uploadImage: () => ({
    type: actionsTypes.UPLOAD_IMAGE,
  }),
  fetchImage: url => ({
    type: actionsTypes.FETCH_IMAGE,
    url,
  }),
};

// initial state
const initialState = {
  uploadedData: {},
  fetchedData: {},
};

// reudcer
export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.UPDATE_IMAGE:
      return {
        ...state, uploadedData: action.data,
      };
    case actionsTypes.RECIEVE_IMAGE:
      return {
        ...state, fetchedData: action.data,
      };
    case actionsTypes.CLEAR_IMAGE:
      return {
        ...state,
        uploadedData: {},
        fetchedData: {},
      };
    default:
      return state;
  }
};
