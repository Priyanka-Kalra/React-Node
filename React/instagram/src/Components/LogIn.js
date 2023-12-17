import * as React from 'react';
import {useContext, useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {makeStyles} from "@mui/styles";
import './LogIn.css'
import {Link,useNavigate} from  'react-router-dom';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {AuthContext} from "../Context/AuthContext";


import Insta from '../Assets/Instagram.JPG'
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import {database, storage} from "../firebase";


export default function LogIn(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false)

    const navigate=useNavigate()

    const store=useContext(AuthContext)

    const useStyles = makeStyles({
        text1: {
            color: 'grey',
            textAlign: 'center',
        },
        card2: {
            height: '5vh',
            marginTop: '0.4vh',


        }
    })
    const classes = useStyles();
    const {logIn}=useContext(AuthContext)

    const handleClick=async()=>{

        try{
            setError('')
            setLoading(true)
            let userObj=await logIn(email,password)
            setLoading(false)
            navigate('/')

        }
        catch (err){

            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }

    }

    return (

        <div className="logInWrapper">
            <div className="imgcar" style={{backgroundImage:`url(${bg})` , backgroundSize:'cover'}}>
                <div className="car">

                    <CarouselProvider
                        visibleSlides={1}
                        totalSlides={5}
                        naturalSlideWidth={238}
                        naturalSlideHeight={423}
                        //hasMasterSpinner
                        isPlaying={true}
                        infinite={true}
                        dragEnabled={false}
                        touchEnabled={false}
                    >
                        <Slider>
                            <Slide index={0}><img src={img1} /></Slide>
                            <Slide index={1}><img src={img2}/></Slide>
                            <Slide index={2}><img src={img3}/></Slide>
                            <Slide index={3}><img src={img4}/></Slide>
                            <Slide index={4}><img src={img5}/></Slide>
                        </Slider>
                    </CarouselProvider>

                </div>
            </div>


            <div className="logInCard">
                <Card variant='outlined'>
                    <div className="insta-Logo">
                        <img src={Insta} className="img-fluid" alt="InstaLogo"/>
                    </div>
                    <CardContent style={{paddingBottom:'1vh'}}>


                        <>
                            <TextField  id="filled-basic" label="Email" variant="filled" fullWidth={true} margin={"dense"} size="small" onChange={(e)=>setEmail(e.target.value)}/>
                            <TextField  id="filled-basic" label="Password" variant="filled" fullWidth={true} margin={"dense"}  size="small" onChange={(e)=>setPassword(e.target.value)}/>
                        </>


                        <Button  color='primary' size="small" margin={"dense"} fullWidth={true}   >Forgot Password?</Button>


                        <CardActions>
                            <Button variant="contained" style={{marginTop:'0.5%'}} fullWidth={true} onClick={handleClick}>Log In</Button>
                        </CardActions>


                    </CardContent>
                </Card>
                <Card className={classes.card2} variant='outlined'>

                    <CardContent style={{paddingTop:'1vh'}}>
                        <Typography  className={classes.text1}   variant="subtitle1" >
                            New User?<Link to="/signUp" style={{textDecoration:'none'}}>Sign Up</Link>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>

    );
}
