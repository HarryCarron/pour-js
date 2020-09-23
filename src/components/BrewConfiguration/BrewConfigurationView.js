import React from 'react';
import BottomBar from './BottomBar';
import MiddleBar from './MiddleBar';
import TopBar from './TopBar';
import * as defaultStyle from './../../commonStyles/layout';

function BrewConfigurationContainer() {

  const InnerPourContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  }

  return (
      <div className='h-w-100' style={InnerPourContainerStyle}>
          <TopBar height = {defaultStyle.topBar}/>
          <MiddleBar height = {defaultStyle.middleBar}/>
          <BottomBar height = {defaultStyle.bottomBar}/>
      </div>
  );
}

export default BrewConfigurationContainer;
