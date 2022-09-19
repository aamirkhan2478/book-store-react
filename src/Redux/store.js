import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const store = configureStore({
  book: bookReducer,
  categories: categoriesReducer,
});

export default store;
