import axios from 'axios';

// Action Types
export const ADD_BOOK = 'Books/books/ADD_BOOK';
export const REMOVE_BOOK = 'Books/books/REMOVE_BOOK';
export const SHOW_BOOKS = 'Books/books/SHOW_BOOKS';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/r7doi2LDN8wnS0R7kWU8/books';

// Initial State
const initialState = {
  books: [],
  isLoading: false,
  msg: {},
};

// Reducers
const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        isLoading: false,
        msg: payload,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        isLoading: false,
        books: state.books.filter((book) => book.id !== payload.id),
        msg: payload.msg,
      };
    case SHOW_BOOKS:
      return {
        ...state,
        isLoading: false,
        books: payload,
      };
    default:
      return state;
  }
};

// Actions
export const showBook = () => async (dispatch) => {
  try {
    const { data } = await axios.get(baseUrl);
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({
      type: SHOW_BOOKS,
      payload: books,
    });
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export const addBook = (values) => async (dispatch) => {
  try {
    const data = await axios.post(baseUrl, values);
    dispatch({
      type: ADD_BOOK,
      payload: data.msg,
    });
    dispatch(showBook());
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/${id}`);
    dispatch({
      type: REMOVE_BOOK,
      payload: {
        id,
        msg: data,
      },
    });
  } catch (error) {
    console.error(error.response.data.error);
  }
};

export default bookReducer;
