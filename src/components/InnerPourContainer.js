import React, { useEffect, useState } from 'react';
import BrewConfigurationView from './BrewConfiguration/BrewConfigurationView';
import store from './../flux/store';
import Router from './router/Router'

function InnerPourContainer() {


  function onChange() {
    setViewState(store.getCurrentView());
  }
  
  const [ viewState, setViewState ] = useState(0);

  useEffect(
    () => store.addChangeListener(onChange)
  )

  const InnerPourContainerStyle = {
    height: `500px`,
    width: '500px',
    position: 'absolute',
    top: -500 * viewState,
    left:0,
    transition: '2s'
  }

  return (
      <div style={InnerPourContainerStyle} className='centerContent'>
        <BrewConfigurationView/>
      </div>
  );
}

export default InnerPourContainer;
