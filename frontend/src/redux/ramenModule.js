export const actionsTypes = {
  GET_RESTAURANT_LIST: 'GET_RESTAURANT_LIST',
  GET_RESTAURANT: 'GET_RESTAURANT',
  RECIEVE_RESTAURANT_LIST: 'RECIEVE_RESTAURANT_LIST',
  RECIEVE_RESTAURANT: 'RECIEVE_RESTAURANT',
  GET_RESTAURANT_NAME_LIST: 'GET_RESTAURANT_NAME_LIST',
  RECIEVE_RESTAURANT_NAME_LIST: 'RECIEVE_RESTAURANT_NAME_LIST',
  GET_RESTAURANT_REVIEWS: 'GET_RESTAURANT_REVIEWS',
  RECIEVE_RESTAURANT_REVIEWS: 'RECIEVE_RESTAURANT_REVIEWS',
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
};

const initialState = {
  page: 1,
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
        restaurantList: action.data,
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
    default:
      return state;
  }
};

export default reducer;
