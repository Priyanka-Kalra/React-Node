import React, {useContext} from 'react';
import context from "./Context";

function Parent2(){
    const theme=useContext(context);
    console.log('Parent2 Called')
    return (
        <div className={theme?'dark':'light'}>
            Parent2
        </div>
    );

}

export default Parent2;