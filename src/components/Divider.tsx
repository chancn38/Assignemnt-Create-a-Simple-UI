import React from 'react';

const Divider = ({ type }) => {
  return (
    <div style={{ ...styles.divider, ...(type === 'horizontal' ? styles.horizontal : styles.vertical) }}></div>
  );
};

const styles = {
  divider: {
    backgroundColor: '#ddd'
  },
  horizontal: {
    height: '1px',
    width: '100%',
    margin: '1rem 0'
  },
  vertical: {
    width: '1px',
    height: '100%',
    margin: '0 1rem'
  }
};

export default Divider;
