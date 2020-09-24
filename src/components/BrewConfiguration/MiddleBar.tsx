import React, { useState, useEffect } from 'react';
import DisplayValue from "./DisplayValue";
import store from "./../../flux/store";

interface MiddleBarProps{
  height: string;
}

const MiddleBar: React.FunctionComponent<MiddleBarProps> = (props: MiddleBarProps) => {

  const flex = {display: 'flex'};

  const storeChanged = () => setBrewWeights(store.getBrewWeights());

  useEffect(
    () => {
      store.addChangeListener(storeChanged);
    }
  );

  const [brewWeights, setBrewWeights] = useState([0, 0]);

  return (
        <div style={{...props.height as {}, ...flex}}>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Coffee'} value={brewWeights[0]}/>
          </div>
          <div className='h-100' style={{width: '50%'}}>
            <DisplayValue label={'Water'} value={brewWeights[1]}/>
          </div>
        </div>
  );
}

export default MiddleBar;
