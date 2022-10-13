import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ isLoading }) => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#4386bf"
    ariaLabel="three-dots-loading"
    visible={isLoading}
  />
);

export default Loader;
