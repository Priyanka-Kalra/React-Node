import React,{useState,useEffect} from "react";
import {auth} from '../firebase'
export const AuthContext=React.createContext()
export function AuthProvider({children}){

    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function logIn(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function logOut(){
        return auth.signOut()
    }

    useEffect(()=>{
        const unsub= auth.onAuthStateChanged((U)=>{
            setUser(U)
            setLoading(false)
        })

        return ()=>unsub()
    },[])

    const store={
        user,
        signUp,
        logIn,
        logOut
    }

    return(
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

