import React from 'react';

function DisplayValue(props) {

    const baseStyle = {
        color: 'white',
        fontWeight: 'bold',
    }

    const labelStyle = {
        height: '20%',
        fontSize: '2em',
        marginLeft: '50px'
    }

    const valueStyle = {
        fontSize: '7em'
    }

    const valueContainerStyle = {
        height: '40%'
    }

    const measureStyle = {
        fontSize: '2em',
        marginLeft: '30px'
    }

  return (

        <div className='h-w-100' style={baseStyle}>
            <div style={ labelStyle } className='vertCenter'>
                {props.label}
            </div>
            <div style={ valueContainerStyle }className='centerContent'>
                <div>
                    <span style={valueStyle}>{props.value || 0}</span>
                    <span style={measureStyle}>g</span>
                </div> 

            </div>
        </div>

  );
}

export default DisplayValue;