import React from 'react';
import DisplayValue from "./DisplayValue";

function MiddleBar(props) {

  const flex = {display: 'flex'};

  return (

        <div style={{...props.height, ...flex}}>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Coffee'}/>
          </div>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Water'}/>
          </div>
        </div>

  );
}

export default MiddleBar;
