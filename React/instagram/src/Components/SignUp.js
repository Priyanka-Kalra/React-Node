import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {makeStyles} from "@mui/styles";
import './SignUp.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom'
import Insta from '../Assets/Instagram.JPG'

export default function SignUp() {
    const useStyles=makeStyles({
        text1: {
            color: 'grey',
            textAlign:'center'
        },
        card2:{
            height:'5vh',
            marginTop:'0.4vh',

        }
    })
    const classes=useStyles();
    return (

        <div className="signUpWrapper">
            <div className="signUpCard">
                <Card variant='outlined'>
                    <div className="insta-Logo">
                        <img src={Insta} className="img-fluid" alt="InstaLogo"/>
                    </div>
                    <CardContent style={{paddingBottom:'1vh'}}>
                        <Typography  className={classes.text1} variant="subtitle1">
                            Sign Up to see photos and videos from your friends
                        </Typography>
                        {
                            true && <Alert severity="error" style={{marginTop:'2%'}} size='extra-small'>This is an error alert — check it out!</Alert>
                        }
                        <>
                            <TextField  id="filled-basic" label="Email" variant="filled" fullWidth={true} margin={"dense"} size="small"/>
                            <TextField  id="filled-basic" label="Password" variant="filled" fullWidth={true} margin={"dense"}  size="small"/>
                            <TextField  id="filled-basic" label="Name" variant="filled" fullWidth={true} margin={"dense"} size="small" />
                        </>


                        <Button  color='secondary' size="small" margin={"dense"} fullWidth={true} startIcon={<CloudUploadIcon/>} component='label' >Upload Profile Image
                            <input type="file" accept="image/" hidden/>
                        </Button>


                        <CardActions>
                            <Button variant="contained" style={{marginTop:'0.5%'}} fullWidth={true} >Sign Up</Button>
                        </CardActions>

                        <Typography  className={classes.text1} variant="subtitle2"  style={{margin:'1vh 0vh 0vh 0.5vh',display: 'flex',justifyContent: 'center'}} fullWidth={true} >
                            By signing up, you agree to our Terms, Data Policy and Cookies
                        </Typography>

                    </CardContent>
                </Card>
                <Card className={classes.card2} variant='outlined'>

                    <CardContent style={{paddingTop:'1vh'}}>
                        <Typography  className={classes.text1}   variant="subtitle1" >
                            Have an Account?<Link to="/login" style={{textDecoration:'none'}}>Log In</Link>
                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>

    );
}