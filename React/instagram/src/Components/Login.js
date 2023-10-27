import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import {makeStyles} from "@mui/styles";

import './Login.css'
import Insta from '../Assets/Instagram.JPG'

export default function Login() {
    const useStyles=makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
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

                    <CardContent>
                        <Typography  className={classes.text1} variant="subtitled1">
                            Sign Up to see photos and videos from your friends
                        </Typography>
                        {
                            true && <Alert severity="error" style={{marginTop:'2%'}}>This is an error alert — check it out!</Alert>
                        }
                        <TextField  id="filled-basic" label="Email" variant="filled" fullWidth={true} margin={"dense"} />
                        <TextField  id="filled-basic" label="Password" variant="filled" fullWidth={true} margin={"dense"}  />

                    </CardContent>
                </Card>
            </div>

        </div>
    );
}