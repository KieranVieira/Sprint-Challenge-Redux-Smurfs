import React from 'react';

const Smurf = props => {
    return(
        <div>
            <h1>{props.data.name}</h1>
            <h2>{props.data.age}</h2>
            <h2>{props.data.height}</h2>
            {/* <button onClick={e => props.deleteSmurf(e,props.data.id)}>delete</button> */}
        </div>
    )
}

export default Smurf