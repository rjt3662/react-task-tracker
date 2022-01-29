import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, color, onClick }) => {
  
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }} 
      className='btn'
    >
    {title}
    </button>
  )
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

Button.defaultProps = {
  title: 'Add New',
  color: 'steel'
}

export default Button;
