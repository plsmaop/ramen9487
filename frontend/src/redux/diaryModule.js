// action types
export const actionsTypes = {
  COMMIT_RAMEN: 'COMMIT_RAMEN',
  FETCH_DIARY: 'FETCH_DIARY',
  RECIEVE_DIARY: 'RECIEVE_DIARY',
  ADD_FAVORITE: 'ADD_FAVORITE',
};

  // action creators
export const actions = {
  addFavorite: favoriteRamenId => ({
    type: actionsTypes.ADD_FAVORITE,
    favoriteRamenId,
  }),
  commitRamen: data => ({
    type: actionsTypes.COMMIT_RAMEN,
    data,
  }),
  fetchDiary: () => ({
    type: actionsTypes.FETCH_DIARY,
  }),
};

  // initial state
const initialState = {
  diary: {},
};

  // reudcer
export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.RECIEVE_DIARY:
      return {
        ...state, diary: action.data,
      };
    default:
      return state;
  }
};
