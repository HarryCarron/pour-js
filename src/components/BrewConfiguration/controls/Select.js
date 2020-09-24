import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

// import { activeViewChanged } from '../../flux/actions';
// import { views } from './../../flux/constants';

function Select(props) {

    const selectStyle = {
        width: '100%',
        fontFamily: 'Helvetica Neue',
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        borderBottom: '1px solid white', 
        adding: '3px',
        fontSize: '15px'
    }

    const handleOnChange = ({target}) => props.onChange(target.value);
    

  return (
    <select onChange={handleOnChange} style={selectStyle}>
        {
        props.options.map((option, i) => 
        <option key={i} value={option[props.valueProp]}>
            {option[props.displayProp]}
        </option>)
        }
    </select>
  );
}

export default Select;
