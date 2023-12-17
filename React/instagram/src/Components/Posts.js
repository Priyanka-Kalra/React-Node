import React, {useEffect,useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import {database} from "../firebase";
import Video from "./Video";
import './Posts.css'
import Like from './Like'

export default function Posts ({userData}) {
    const [posts,setPosts]=useState(null)

    useEffect(() => {
        let parr=[]
        const unsub=database.posts.orderBy('createdAt','desc').onSnapshot((querysnapshot)=>{
            parr=[]
            querysnapshot.forEach((doc)=>{
                let data={...doc.data(),postIds:doc.id}
                parr.push(data)
            })

            setPosts(parr)
        })
        return ()=> {unsub()}
    }, []);

    return (
        <div>
            {

                (posts===null ||userData===null)?<CircularProgress />:
                    <div className='video-container'>
                        {
                            posts.map((post,index)=> (
                                <React.Fragment key={index}>
                                    <div className='videos' >
                                        <Video src={post.pUrl}/>
                                        <div className="fa" style={{display:'flex'}}>
                                            <Avatar  src={userData.ProfileUrl} />
                                            <h4>{userData.Name}</h4>
                                        </div>
                                        <Like userData={userData} postData={post}/>
                                    </div>
                                </React.Fragment>
                            ))
                        }

                    </div>
            }
        </div>
    );

}

