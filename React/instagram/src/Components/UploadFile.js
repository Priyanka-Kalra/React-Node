import React, {useState} from 'react';
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import {database, storage} from "../firebase";
import {v4 as uuidv4} from "uuid";

export default function UploadFile(props) {

    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false)

    const handleClick=async(file)=> {


        if (file === null) {
            setError('Please select a file first')
            setTimeout(() => {
                setError('')
            }, 3000)
            return;
        }
        if (file.size / (1024 * 1024) > 100) {
            setError('This video is very big');
            setTimeout(() => {
                setError('')
            }, 3000);
            return;
        }

        setLoading(true);
        let uid = uuidv4()


        const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);

        function fn1(snapshot) {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`${progress}% is complete`)
        }

        function fn2(err) {
            setError(err.message)
            setTimeout(() => {
                setError('')
            }, 3000);
            setLoading(false)
            return;
        }

        // function fn3() {
        //     uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        //         let obj = {
        //             likes: [],
        //             comments: [],
        //             pId: uid,
        //             pUrl: url,
        //             uName: props.userData.Name,
        //             uProfile: props.userData.ProfileUrl,
        //             userId: props.userData.UserId,
        //             createdAt: database.getTimeStamp()
        //         }
        //
        //         database.posts.add(obj).then(async (ref) => {
        //
        //             let res = await database.users.doc(props.user.userId).update(
        //                 {
        //
        //                     postIds: props.userData.postIds != null ? [...props.userData.postIds, ref.id] : [ref.id]
        //                 }
        //             )
        //         }).then(() => {
        //             setLoading(false)
        //         }).catch((err) => {
        //             setError(err)
        //             setTimeout(() => {
        //                 setError('')
        //             }, 3000)
        //             setLoading(false)
        //         })
        //
        //
        //     })
        //
        // }
        async function fn3() {
            try {
                const url = await uploadTask.snapshot.ref.getDownloadURL();

                const postObj = {
                    likes: [],
                    comments: [],
                    pId: uid,
                    pUrl: url,
                    uName: props.userData.Name,
                    uProfile: props.userData.ProfileUrl,
                    userId: props.userData.UserId,
                    createdAt: database.getTimeStamp()
                };

                const postRef = await database.posts.add(postObj);
                await database.users.doc(postObj.userId).update({
                    postIds: props.userData.postIds ? [...props.userData.postIds, postRef.id] : [postRef.id]
                });

                setLoading(false);
            } catch (err) {
                console.error('Error in fn3:', err);
                setError(err.message || 'An error occurred');
                setTimeout(() => {
                    setError('');
                }, 3000);
                setLoading(false);
            }
        }

    }


    return (
        <div style={{marginTop:'5rem',marginBottom:'1rem'}}>
            {
                error!==''?
                    <Alert severity="error">{error}</Alert>
                    :
                    <>
                        <Button variant="outlined" color="secondary" disabled={loading} component='label'  onChange={(e)=>handleClick(e.target.files[0])}>
                            <MovieIcon />&nbsp; Upload Video
                            <input type='file' accept='video/*'  hidden/>

                        </Button>
                        { loading?<LinearProgress color='secondary' style={{marginTop:'3%'}} />:<></>}
                    </>
            }
        </div>
    );

}

