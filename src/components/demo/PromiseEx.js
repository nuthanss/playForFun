import React from 'react';
import { Link } from 'react-router-dom';

function PromiseEx(props) {
    
    const promise = new Promise( (resolve, reject) => {
        resolve("true");
        reject("false");
    });
    promise.then((result)=>
                  console.log(`Then: ${result}`))
    .catch((error)=> 
                  console.log(`Catch: ${error}`));
    
    return (
        <div>
            <Link to='/'>path</Link>
        </div>
    );
}

export default PromiseEx;