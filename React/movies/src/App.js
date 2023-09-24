import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import './App.css';
import Favourites from "./Components/Favourites";
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Routes>
                  {/*<Route path='/' render={(props)=>(*/}
                  {/*    <>*/}
                  {/*        <Banner {...props}/>*/}
                  {/*        <Movies {...props}/>*/}
                  {/*    </>*/}
                  {/*)} />*/}
                  <Route path='/' element={<Movies/>}/>
                  <Route path='/favourites' element={<Favourites/>}/>

              </Routes>

          </Router>
      </>

  );
}

export default App;
