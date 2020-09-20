import React from 'react';
import BrewConfigurationView from './BrewConfiguration/BrewConfigurationView';

function InnerPourContainer() {


  const InnerPourContainerStyle = {
    height: '500px',
    width: '500px',
    position: 'absolute',
    top: 0,
    left:0
  }

  return (
      <div style={InnerPourContainerStyle} className='centerContent'>
        <BrewConfigurationView/>
      </div>
  );
}

export default InnerPourContainer;
