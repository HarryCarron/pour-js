import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight,faCog } from '@fortawesome/free-solid-svg-icons';

interface TopbarParams {
    height: string
}



const TopBar: React.FunctionComponent<TopbarParams> = (props: TopbarParams) => {

    const topBarStyle = {
        display: 'flex',
    }

    return (
        <div style={{...props.height as {}, ...topBarStyle}}>
            <div style={{width: '10%'}}></div>
            <div style={{width: '30%'}}></div>
            <div style={{width: '30%'}}></div>
            <div style={{width: '20%', display: 'flex'}}>
                <div style={{width: '50%'}} className='centerContent'>
                    <div style={{fontSize: '1.5em', color: 'white'}}>
                        <FontAwesomeIcon icon={faWeight} />
                    </div>
                </div>
                <div style={{width: '50%'}} className='centerContent'>
                    <div style={{fontSize: '1.5em', color: 'white'}}>
                        <FontAwesomeIcon icon={faCog} />
                    </div>

                </div>
            </div>
            <div style={{width: '10%'}}></div>
        </div>
    );
}

export default TopBar;