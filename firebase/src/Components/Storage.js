import React, {useState} from 'react';
import {storage} from "../firebase";

function Storage () {
    const [file,setFile]=useState('');
    let upload=()=>{
        const uploadTask=storage.ref(`/data/${file.name}`).put(file);//creates a path '/ref/fileNAME'
        uploadTask.on('state_changed',fn1,fn2,fn3);

        function fn1(snapshot){
            let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(`${progress}% is complete`)
        }
        function fn2(){
            console.log('Error',Error)
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>console.log(url))
        }
    }
    return (
        <div>
            <label htmlFor='file'>File:</label>
            <input type='file' accept='image/' onChange={(e)=>setFile(e.target.files[0])}></input>
            <button onClick={upload}>Upload</button>
        </div>
    );
}

export default Storage;