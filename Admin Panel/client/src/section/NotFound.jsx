import React from 'react';

function NotFound() {
  return (
    <h1
      style={{
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '3rem'
      }}
    >
      <span style={{color: 'red'}}>404</span> - Page Not Found
    </h1>
  );
}

export default NotFound;
