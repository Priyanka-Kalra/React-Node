import './App.css';
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
          <Routes>
              <Route path={'/'} element={<LogIn/>}/>
              <Route path={'/login'} element={<LogIn/>}/>
              <Route path={'//signUp'} element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
