export const actionsTypes = {
  GET_RESTAURANT_LIST: 'GET_RESTAURANT_LIST',
  GET_RESTAURANT: 'GET_RESTAURANT',
  RECIEVE_RESTAURANT_LIST: 'RECIEVE_RESTAURANT_LIST',
  RECIEVE_RESTAURANT: 'RECIEVE_RESTAURANT',
  GET_RESTAURANT_NAME_LIST: 'GET_RESTAURANT_NAME_LIST',
  RECIEVE_RESTAURANT_NAME_LIST: 'RECIEVE_RESTAURANT_NAME_LIST',
  GET_RESTAURANT_REVIEWS: 'GET_RESTAURANT_REVIEWS',
  RECIEVE_RESTAURANT_REVIEWS: 'RECIEVE_RESTAURANT_REVIEWS',
  POST_REVIEW: 'POST_REVIEW',
  RECIEVE_REVIEW: 'RECIEVE_REVIEW',
};

export const actions = {
  getRestaurantList: (page, number, searchConditions) => ({
    type: actionsTypes.GET_RESTAURANT_LIST,
    page,
    number,
    searchConditions,
  }),
  getRestaurant: id => ({
    type: actionsTypes.GET_RESTAURANT,
    id,
  }),
  getRestaurantReviews: id => ({
    type: actionsTypes.GET_RESTAURANT_REVIEWS,
    id,
  }),
  postReview: (id, content) => ({
    type: actionsTypes.POST_REVIEW,
    id,
    content,
  }),
};

const initialState = {
  page: 1,
  totalNumber: 0,
  restaurantList: [],
  restaurantNameList: [],
  currentRestaurant: {},
  currentRestaurantReviews: [],
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
        currentRestaurantReviews: state.currentRestaurantReviews.concat([action.data]),
      };
    default:
      return state;
  }
};

export default reducer;
