import './App.css';
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import React  from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import {AuthProvider,AuthContext } from './Context/AuthContext'
import {Feed} from "./Components/Feed";
import {useContext} from "react";
import Profile from "./Components/Profile";

function PrivateRoute({ element }) {
    const { user } = useContext(AuthContext);

    return user ? ( <Route element={element} /> ) :
        ( <Navigate to="/login"  replace /> );
}
function App() {
    return (
        <div >
            <Router>

                <AuthProvider>
                    <Routes>

                        <Route path={'/login'} element={<LogIn/>}/>
                        <Route path={'/signUp'} element={<SignUp/>}/>
                        <Route path={'/profile/:id'} element={<PrivateRoute element={<Profile />} />} />
                        <Route path="/" element={<PrivateRoute element={<Feed />} />} />

                    </Routes>

                </AuthProvider>

            </Router>
        </div>
  );
}

export default App;
