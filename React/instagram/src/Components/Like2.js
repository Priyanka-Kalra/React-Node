import React,{useState,useEffect} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

export default function Like2({userData,postData}) {
    const [like,setLike] = useState(null);
    useEffect( ()=>{
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
            console.log('hell1')
        }else{
            let narr = [...postData.likes,userData.UserId]
            database.posts.doc(postData.postIds).update({
                likes:narr
            })
            console.log('hell2')
        }
        console.log('hell3')
    }

    return (
        <div>
            {
                like!==null?
                    <>
                        {
                            like===true?<FavoriteIcon style={{padding:'1rem'}} className={`like`} onClick={handleLike}/>: <FavoriteIcon style={{padding:'1rem'}} className={`unlike2`} onClick={handleLike}/>
                        }
                    </>:<></>

            }
        </div>
    );

}
