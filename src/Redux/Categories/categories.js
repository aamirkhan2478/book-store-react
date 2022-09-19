import SHOW_STATUS from './categoriesTypes';

const initialState = {
  categories: [],
  isLoading: false,
};

// Reducers
const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_STATUS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };

    default:
      return initialState;
  }
};

// Actions
export const checkStatus = () => (dispatch) => {
  dispatch({
    type: SHOW_STATUS,
    payload: ['Under Construction'],
  });
};

export default categoriesReducer;
