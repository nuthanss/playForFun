import React from 'react';

function Child({update}) {
    return (
        <div>
            {update("demo")}
        </div>
    );
}

export default Child;