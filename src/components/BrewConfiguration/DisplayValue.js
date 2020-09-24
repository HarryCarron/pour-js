import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayValue(props) {

    const baseStyle = {
        color: 'white',
        fontWeight: 'bold',
    }

    const labelStyle = {
        height: '20%',
        fontSize: '2em',
        marginLeft: '40px'
    }

    const valueStyle = {
        fontSize: '5em',
        marginLeft: '40px'
    }

    const valueContainerStyle = {
        height: '40%'
    }

    const measureStyle = {
        fontSize: '2em',
        marginLeft: '10px'
    }

  return (
        <div className='h-w-100' style={baseStyle}>
            <div style={ labelStyle } className='vertCenter'>
                {props.label} {
                    props.icon && <span style={{marginLeft: '10px'}}><FontAwesomeIcon icon={ props.icon } /></span>
                }
            </div>
            <div style={ valueContainerStyle }>
                <div>
                    <span style={valueStyle}>{props.value || 0}</span>
                    <span style={measureStyle}>g</span>
                </div> 
            </div>
        </div>
  );
}

export default DisplayValue;