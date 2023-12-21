import React,{useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import {database} from '../firebase'

function Comments({postData}) {
    const [comments,setComments] = useState(null)
    // useEffect(()=>{
    //     let arr = []
    //     for(let i=0;i<postData.comments.length;i++){
    //         let data =  database.comments.doc(postData.comments[i]).get()
    //         arr.push(data.data())
    //     }
    //     setComments(arr)
    // },[postData])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                let arr = [];
                for (let i = 0; i < postData.comments.length; i++) {
                    let snapshot = await database.comments.doc(postData.comments[i]).get();
                    arr.push(snapshot.data());
                }
                setComments(arr);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        // Call the async function
        fetchComments();
    }, [postData]);

    return (
        <div>
            {
                comments==null? <CircularProgress/> :
                    <>
                        {
                            comments.map((comment,index)=>(
                                <div style={{display:'flex'}}>
                                    <Avatar  src={comment.uProfileImage}/>
                                    <p>&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>{comment.uName}</span>&nbsp;&nbsp; {comment.text}</p>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default Comments