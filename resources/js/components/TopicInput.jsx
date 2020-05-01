import React from 'react';

const TopicInput = (props) => {
    return(
        <div className="form-group mb-0 col-2 pl-0 pr-2">
            <label htmlFor={props.id}><small>{props.title}</small></label>
            <input id={props.id} name={props.id} type="text" className="form-control"></input>
        </div>
    )
}

export default TopicInput;