import React from 'react';
import DisplayValue from "./DisplayValue";
import { faWater } from '@fortawesome/free-solid-svg-icons'

function MiddleBar(props) {

  const flex = {display: 'flex'};

  return (
        <div style={{...props.height, ...flex}}>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Coffee'} value={12}/>
          </div>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Water'} value={32} icon={ faWater }/>
          </div>
        </div>
  );
}

export default MiddleBar;
