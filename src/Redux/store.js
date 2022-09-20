import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Books/books";
import categoriesReducer from "./Categories/categories";

const reducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
