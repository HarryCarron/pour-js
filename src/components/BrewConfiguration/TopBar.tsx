import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight,faCog, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Select from "./controls/Select";
import { brewTypeChanged } from "./../../flux/actions";

import { brewMethods } from './../../flux/constants'


interface TopbarParams {
    height: string
}


const methodOptionArray= [
    {
        name: 'Aeropress',
        id: brewMethods.AEROPRESS
    },
    {
        name: 'Chemex',
        id: brewMethods.CHEMEX
    },
    {
        name: 'French Press',
        id: brewMethods.FRENCHPRESS
    },
    {
        name: 'Siphon',
        id: brewMethods.SIPHON
    }
]



const TopBar: React.FunctionComponent<TopbarParams> = (props: TopbarParams) => {

    const topBarStyle = {
        display: 'flex',
    }

    const handleBrewMethodChange = (bt: any) => brewTypeChanged(bt);

    return (
        <div style={{...props.height as {}, ...topBarStyle}}>
            <div style={{width: '5%'}}></div>
            <div style={{width: '30%'}} className='vertCenter'>
                <Select 
                options={methodOptionArray}
                displayProp={'name'}
                valueProp={'id'}
                onChange={ handleBrewMethodChange }
                ></Select>
            </div>
            <div style={{width: '40%'}}></div>
            <div style={{width: '20%', display: 'flex'}}>
                <div style={{width: '50%'}} className='centerContent'>
                    <div style={{fontSize: '1.2em', color: 'white'}}>
                        <FontAwesomeIcon icon={faWeight} />
                    </div>
                </div>
                <div style={{width: '50%'}} className='centerContent'>
                    <div style={{fontSize: '1.2em', color: 'white'}}>
                        <FontAwesomeIcon icon={faCog} />
                    </div>

                </div>
            </div>
            <div style={{width: '5%'}}></div>
        </div>
    );
}

export default TopBar;