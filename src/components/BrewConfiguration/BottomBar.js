import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function BottomBar(props) {

  const bottomBar = {
    color: 'white',
    flexDirection: 'column',
    fontSize: '1.5em',
    letterSpacing: '1.3px',
    backgroundColor: '#2b2b2b'
  }

  return (
      <div style={ {...props.height, ...bottomBar }} className='centerContent'>
        <div>Measure</div>
      </div>
  );
}

export default BottomBar;
