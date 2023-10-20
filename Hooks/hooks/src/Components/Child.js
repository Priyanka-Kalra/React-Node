import React from 'react';

function Child(){
    console.log('Child Called')
    return (
        <div >
            Child
        </div>
    );

}
export default Child;
// export default React.memo(Child); - used to avoid re-rendering of children components.Here child.js is child of Parent1.js