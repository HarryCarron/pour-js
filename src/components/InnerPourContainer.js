import React from 'react';
import BrewConfigurationView from './BrewConfiguration/BrewConfigurationView';

function InnerPourContainer() {


  const InnerPourContainerStyle = {
    height: '80%',
    width: '80%',
  }

  return (
      <div style={InnerPourContainerStyle} className='centerContent'>
        <BrewConfigurationView/>
      </div>
  );
}

export default InnerPourContainer;
