import React, {useState,useEffect} from 'react';

function Ue3 () {
    const [count,setCount]=useState(0);
    const [txt,setText]=useState('')

    useEffect(()=>{
        console.log("useEffect");
        document.title=`Button Clicked ${count} times`;
    },[count])//will only call useeffect for change in count

    console.log('render')
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" value={txt} onChange={(e)=>setText(e.target.value)}/>

        </div>
    );

}

export default Ue3;