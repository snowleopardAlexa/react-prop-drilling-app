import React from 'react';
import Sixth from './Sixth';

const Fifth = (props) => {
    return (
        <div>
            <h5>Fifth Component</h5>
            <Sixth text={props.text} />
        </div>
    );
};

export default Fifth;
