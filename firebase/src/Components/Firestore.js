import {database} from "../firebase";
import React, {useState,useEffect} from 'react';



function Firestore() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')



    useEffect(async()=>{
        let data=await database.users.get();
        data.forEach((obj)=>console.log(obj.data()))
    })
    let createUserInDb=async()=>{
        await database.users.add({name,age})
        //await database.users.doc('unique id').set({name,age}) ,sets the data with the entered unique id

        setName('')
        setAge('')
    }
    let updateUserInDb=async()=>{
        await database.users.doc('unique id').update({name,age}) //update the data with the entered unique id

        setName('')
        setAge('')
    }
    let deleteUserInDb=async()=>{
        await database.users.doc('unique id').delete({name,age}) //deletes the data with the entered unique id

    }

    return (
        <>
            <div style={{border:'0.2rem solid grey',padding:'1rem',margin:'0.4rem'}}>
                <div className="mb-3">
                    <label htmlFor="name" >Name</label>
                    <input type="text" style={{marginLeft:'2rem'}} value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="age" >Age</label>
                    <input type="number" style={{marginLeft:'2rem'}} value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" style={{margin:'0rem 1rem'}} onClick={createUserInDb} >Create</button>

            </div>
        </>
    );

}

export default Firestore;