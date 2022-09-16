import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default MainLayout;
