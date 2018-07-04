export const actionsTypes = {
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  CLEAR_CONTENT: 'CLEAR_CONTENT',
};
  
export const actions = {
  updateContent: (type, data) => ({
    type: actionsTypes.UPDATE_CONTENT,
    contentType: type,
    data,
  }),
};

const initialState = {
  name: '',

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.RECIEVE_RESTAURANT_LIST:
      return {
        ...state,
        totalNumber: action.data.total,
        restaurantList: action.data.data,
      };
    case actionsTypes.RECIEVE_RESTAURANT:
      return {
        ...state,
        currentRestaurant: action.data,
      };
    case actionsTypes.RECIEVE_RESTAURANT_REVIEWS:
      return {
        ...state,
        currentRestaurantReviews: action.data,
      };
    case actionsTypes.RECIEVE_REVIEW:
      return {
        ...state,
        currentRestaurantReviews: [action.data].concat(state.currentRestaurantReviews),
      };
    default:
      return state;
  }
};

export default reducer;
