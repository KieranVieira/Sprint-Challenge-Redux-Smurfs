import React from 'react';

const SmurfForm = props => {
    return(
        <form onSubmit={props.addSmurf}>
            <input 
                type="text"
                placeholder="Name" 
                name="name" 
                value={props.values.name}
                required 
                onChange={props.handleFormChange}
            />
            <input 
                type="number" 
                placeholder="Age" 
                name="age" 
                value={props.values.age}
                required 
                onChange={props.handleFormChange}
            />
            <input 
                type="number" 
                placeholder="Height" 
                name="height" 
                value={props.values.height}
                required 
                onChange={props.handleFormChange}
            />
            <button type="submit">Add Smurf</button>
        </form>
    )
}

export default SmurfForm;