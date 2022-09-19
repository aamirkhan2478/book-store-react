import { ADD_BOOK, REMOVE_BOOK } from './bookTypes';

const initialState = {
  books: [],
  isLoading: false,
  getId: null,
};

// Reducers
const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        isLoading: false,
        payload,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        isLoading: false,
        getId: state.books.filter((book) => book.id !== payload),
      };
    default:
      return state;
  }
};

// Actions
export const addBook = (values) => (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: values,
  });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export default bookReducer;
