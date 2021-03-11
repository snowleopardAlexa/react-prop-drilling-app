import React from 'react';
import Fifth from './Fifth';

const Third = (props) => {
    return (
        <div>
            <h4>Fourth Component</h4>
            <Fifth text={props.text} />
        </div>
    );
};

export default Third;