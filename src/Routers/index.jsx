import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Layouts';
import BookPage from '../Layouts/Pages/BookPage';
import CategoriesPage from '../Layouts/Pages/CategoriesPage';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<BookPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Route>
  </Routes>
);

export default Routers;
