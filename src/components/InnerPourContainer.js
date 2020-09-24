import React, { useEffect, useState } from 'react';
import BrewConfigurationView from './BrewConfiguration/BrewConfigurationView';
import store from './../flux/store';
import { brewMethods } from "./../flux/constants";

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
    display: 'flex',
    flexDirection: 'column',
    top: -500 * viewState,
    left:0,
    transition: '1s'
  }

  return (
      <div style={InnerPourContainerStyle} className='centerContent'>
        <BrewConfigurationView/>
        <div style= {{width: '500px', height: '500px', backgroundColor: 'red'}}></div>
      </div>
  );
}

export default InnerPourContainer;
