import React, { useEffect, useState} from 'react';

function Infinite (){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("useEffect");
        document.title=`Button Clicked ${count} times`;
        setCount(count+1)
    })
    console.log('render')
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>

        </div>
    );
}

export default Infinite;