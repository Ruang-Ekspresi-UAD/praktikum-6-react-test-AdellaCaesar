import React from 'react';

const Display = ({ count }) => {
    return <div data-testid="count-value">{count}</div>;
};

export default Display;