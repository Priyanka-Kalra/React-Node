import React, {useEffect,useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {database} from "../firebase";
import Video from "./Video";
import './Posts.css'
import Like from './Like'
import Like2 from './Like2'
import Comments from "./Comments";
import AddComment from "./AddComment";

export default function Posts ({userData}) {
    const [posts,setPosts]=useState(null)

    const [open, setOpen] = React.useState(null);
    const handleClickOpen = (id) => {
        setOpen(id);
    };
    const handleClose = () => {
        setOpen(null);
    };

    useEffect(() => {
        let parr=[]
        const unsub= database.posts.orderBy('createdAt','desc').onSnapshot((querysnapshot)=>{
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

                                        <ChatBubbleIcon className='chat-styling' onClick={()=>handleClickOpen(post.postIds)}/>

                                        <Dialog
                                            open={open===post.postIds}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            fullWidth ={true}
                                            maxWidth = 'md'>

                                            <div className="modal-container">
                                                <div className="video-modal">
                                                    <video autoPlay={true} muted="muted" controls>
                                                        <source src={post.pUrl}/>
                                                    </video>
                                                </div>
                                                <div className="comment-modal">
                                                    <Card className="card1" style={{padding:'1rem'}}>
                                                        <Comments postData={post}/>
                                                    </Card>
                                                    <Card variant="outlined" className="card2" style={{textAlign:'center'}}>
                                                        <Typography style={{padding:'0.4rem'}}>
                                                            {
                                                                post.likes.length===0?'Liked by nobody':`Liked by ${post.likes.length} users`
                                                            }
                                                        </Typography>
                                                        <div style={{display:'flex'}}>
                                                            <Like2 postData={post} userData={userData} style={{display:'flex',alignItems:'center',justifyContent:'center'}}/>
                                                            <AddComment style={{display:'flex',alignItems:'center',justifyContent:'center'}} userData={userData} postData={post}/>
                                                        </div>
                                                    </Card>
                                                </div>

                                            </div>

                                        </Dialog>
                                    </div>
                                </React.Fragment>
                            ))
                        }

                    </div>
            }
        </div>
    );

}

