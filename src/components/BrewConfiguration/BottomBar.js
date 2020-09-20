import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function BottomBar(props) {

  const bottomBar = {
    color: 'white',
    opacity: '0.6',
    flexDirection: 'column',
    fontSize: '1.5em',
    letterSpacing: '1.3px'
  }

  return (
      <div style={ {...props.height, ...bottomBar }} className='centerContent'>
        <div>Measure</div>
        <div><FontAwesomeIcon icon={faCaretDown} /></div>
      </div>
  );
}

export default BottomBar;
