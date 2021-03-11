import React from 'react';
import Second from './Second';

// arrow function
const First = (props) => {
    return (
        <div>
            <h1>First Component</h1>
            <Second text={props.text} />
        </div>
    );
};

export default First;

