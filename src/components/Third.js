import React from 'react';
import Fourth from './Fourth';

const Third = (props) => {
    return (
        <div>
            <h3>Third Component</h3>
            <Fourth text={props.text} />
        </div>
    );
};

export default Third;