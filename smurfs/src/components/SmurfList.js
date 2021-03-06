import React from 'react';

import Smurf from './Smurf'

const SmurfList = props => {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf 
                    data={smurf} 
                    deleteSmurf={props.deleteSmurf}
                    startUpdatingSmurf={props.startUpdatingSmurf}
                />
            })}
        </div>
    )
}

export default SmurfList