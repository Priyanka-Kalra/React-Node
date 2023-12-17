import React,{useState,useEffect} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

export default function Like({userData,postData}) {
    const [like,setLike] = useState(null);
    useEffect(()=>{
        let check = postData.likes.includes(userData.UserId)
        setLike(check)
    },[postData])
    const handleLike = () => {
        // console.log('8888')
        // console.log(postData)
        // console.log(postData.postId)
        if(like===true){
            let narr = postData.likes.filter((el)=>el!==userData.UserId)
            database.posts.doc(postData.postIds).update({
                likes:narr
            })
        }else{
            let narr = [...postData.likes,userData.UserId]
            database.posts.doc(postData.postIds).update({
                likes:narr
            })
        }
    }
    return (
        <div>
            {
                like!==null?
                    <>
                        {
                           like===true?<FavoriteIcon className={`icon-styling like`} onClick={handleLike}/>: <FavoriteIcon className={`icon-styling unlike`} onClick={handleLike}/>
                        }
                    </>:<></>

            }
        </div>
    );

}

