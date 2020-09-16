import React from 'react';
import InnerPourContainer from './InnerPourContainer';

function App() {

  const dim = 500 + 'px';

  const pourContainerStyle = {
    height: dim,
    width: dim,
    borderRadius: '70px',
    backgroundColor: '#36353e',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
      <div 
      style={pourContainerStyle}
      className='centerContent'>
        <InnerPourContainer/>
      </div>
  );
}

export default App;
