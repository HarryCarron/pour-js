import React, { createRef, useEffect } from 'react';
import InnerPourContainer from './InnerPourContainer';
import { brewCongfigView } from './../objects/viewGradients';
import { RGBcolor } from './../objects/rgbColor';

function PourContainer() {

  const dim = 500;

  var ctx;

  const assignCTX = () => ctx = canvasRef.current.getContext('2d');

  const renderBackground = () => {

    brewCongfigView.forEach(bc => {
      const grad = ctx.createRadialGradient(...bc.coords);
      [0, 1].forEach(v => {
        const col = RGBcolor(v, ...bc.color);
        grad.addColorStop(v, RGBcolor(v, ...bc.color))
      }
        );
      ctx.fillStyle = grad;
      ctx.fillRect(0,0, dim, dim);
    })

  }


  useEffect(
    () => {
      if (!ctx) {
        assignCTX();
        renderBackground();
      }
    })

  const canvasRef = createRef();

  const pourContainerStyle = {
    height: `${dim}px`,
    width: `${dim}px`,
    borderRadius: '70px',
    backgroundColor: '#36353e',
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  }

  return (
      <div 
      style={pourContainerStyle}
      className='centerContent'>
        <canvas 
        height={dim}
        width={dim}
        ref={canvasRef}>

        </canvas>
        <InnerPourContainer/>
      </div>
  );
}

export default PourContainer;
