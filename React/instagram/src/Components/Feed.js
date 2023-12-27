import React, {useContext,useState,useEffect} from 'react';
import {AuthContext} from "../Context/AuthContext";
import UploadFile from './UploadFile'
import {database} from '../firebase'
import Posts from "./Posts";
import Navbar from "./Navbar";


export function Feed () {
    const {user,logOut} = useContext(AuthContext)
    const [userData,setUserData] = useState('')
    useEffect(()=>{
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return ()=> {unsub()}
    },[user])

        return (
            <>
                <Navbar userData={userData}/>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    {/*<div className='comp' style={{width:'50%'}}>*/}
                    {/*    <h1>Welcome To Feed</h1>*/}
                    {/*    <button onClick={logOut}>Log Out</button>*/}
                    {/*</div>*/}

                    <UploadFile userData={userData}/>
                    <Posts userData={userData}/>
                </div>
            </>

        );

}
