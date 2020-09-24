import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { activeViewChanged } from '../../flux/actions';
import { views } from './../../flux/constants';

function BottomBar(props) {

  const measure = () => activeViewChanged(views.MEASURE);

  const bottomBar = {
    color: '#4e4e52',
    flexDirection: 'column',
    fontSize: '1.3em',
    letterSpacing: '1.3px',
    cursor: 'pointer'
  }

  return (
      <div 
      style={ {...props.height, ...bottomBar }}
      className='centerContent'
      onClick={() => { measure() }}
      >
        <div>Measure</div>
        <FontAwesomeIcon icon={ faCaretDown } />
      </div>
  );
}

export default BottomBar;
