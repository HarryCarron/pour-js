import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { activeViewChanged } from '../../flux/actions';
import { views } from './../../flux/constants';

function BottomBar(props) {

  const measure = () => activeViewChanged(views.MEASURE);

  const bottomBar = {
    color: 'white',
    flexDirection: 'column',
    fontSize: '1.5em',
    letterSpacing: '1.3px',
    backgroundColor: '#2b2b2b'
  }

  return (
      <div 
      style={ {...props.height, ...bottomBar }}
      className='centerContent'
      onClick={() => { measure() }}
      >
        <div>Measure</div>
      </div>
  );
}

export default BottomBar;
