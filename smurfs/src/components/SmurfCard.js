import React from "react";

const SmurfCard = props => {
    return (
        
        <div className = 'SmurfCard'>
            <h2>Name: {props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>Height: {props.data.height}</p>
        </div>
        
    );
};

export default SmurfCard;