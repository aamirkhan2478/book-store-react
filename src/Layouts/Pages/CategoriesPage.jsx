import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { checkStatus } from '../../Redux/Categories/categories';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  document.title = 'Book Store | Categories';

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 300,
  };

  const buttonStyle = {
    width: '11.5rem',
    height: '2.813rem',
    margin: '1.188rem 0 0 2.125rem',
    padding: '0.801rem 1.188rem 0.886rem 1.375rem',
    borderRadius: '3px',
    backgroundColor: '#0290ff',
    fontFamily: 'RobotoSlab',
    fontSize: '0.813rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
    borderColor: '#0290ff',
  };

  return (
    <div style={containerStyle}>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => dispatch(checkStatus())}
      >
        Show Status
      </button>
      {categories.map((category) => (
        <p key={uuidv4()}>{category}</p>
      ))}
    </div>
  );
};

export default CategoriesPage;
