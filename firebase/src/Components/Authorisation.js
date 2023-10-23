import React, {useEffect, useState} from 'react';
import {auth} from "../firebase";

function Authorisation(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [user,setUser]=useState('')

    let create=async()=>{
        await auth.createUserWithEmailAndPassword(email,password);

    }
    let login=async()=>{
        await auth.signInWithEmailAndPassword(email,password);

    }
    let logout=async ()=>{
        await auth.signOut();
        setEmail('')
        setPassword('')
    }

    useEffect(()=>{
        let unsub=auth.onAuthStateChanged((U)=>setUser(U))
        return()=>unsub();//clean up
    },[])
    return (
        <>
            {
                user===null?
                    <div style={{border:'0.2rem solid grey',padding:'1rem',margin:'0.4rem'}}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{margin:'0rem 1rem'}} onClick={create}>Sign Up</button>
                        <button type="submit" className="btn btn-primary" style={{margin:'0rem 1rem'}} onClick={login}>Sign In</button>
                    </div>:
                    <div>
                        <h2>Logged in!!</h2>
                        <button type="submit" className="btn btn-primary" style={{margin:'0rem 1rem'}} onClick={logout}>Log Out</button>

                    </div>

            }


        </>
    );

}

export default Authorisation;