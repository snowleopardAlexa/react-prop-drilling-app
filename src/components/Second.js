import React from 'react';
import Third from './Third';

// arrow function
const Second = (props) => {
    return (
        <div>
            <h2>Second Component</h2>
            <Third text={props.text} />
        </div>
    );
};

export default Second;