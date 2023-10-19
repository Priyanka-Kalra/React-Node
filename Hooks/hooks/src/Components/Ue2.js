import React, {useState,useEffect} from 'react';

function Ue2 () {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("useEffect");
        document.title=`Button Clicked ${count} times`;
    },[])
    //componentdidmount only works

    console.log('render')
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>

        </div>
    );

}

export default Ue2;