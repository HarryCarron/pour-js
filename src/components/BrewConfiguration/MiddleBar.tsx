import React from 'react';
import DisplayValue from "./DisplayValue";
import { faWater } from '@fortawesome/free-solid-svg-icons'

interface MiddleBarProps{
  height: string;
}

const MiddleBar: React.FunctionComponent<MiddleBarProps> = (props: MiddleBarProps) => {

  const flex = {display: 'flex'};

  return (
        <div style={{...props.height as {}, ...flex}}>
          <div className='h-100' style={{width: '45%'}}>
            <DisplayValue label={'Coffee'} value={12}/>
          </div>
          <div style={{width: '10%'}}>
            <svg height='300' width='50'>
              <line x1="10" y1="290" x2="40" y2="10" stroke-width='5' stroke = 'rgb(255,255,255)'/>
            </svg>
          </div>
          <div className='h-100' style={{width: '45%'}}>
            <DisplayValue label={'Water'} value={32} icon={ faWater }/>
          </div>
        </div>
  );
}

export default MiddleBar;
