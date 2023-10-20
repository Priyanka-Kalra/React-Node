import './App.css';
import context from "./Components/Context";
import {useState} from 'react'

import Navbar from "./Components/Navbar";
import Parent1 from "./Components/Parent1";
import Parent2 from "./Components/Parent2";
function App() {

    const [theme,setTheme]=useState(false)
  return (
    <context.Provider value={theme}>

        <button onClick={()=>setTheme(!theme)}>Click Me</button>
        <Navbar/>
        <Parent1/>
        <Parent2/>

    </context.Provider>
  );
}

export default App;
