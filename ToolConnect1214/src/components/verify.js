
import React from 'react';
import { useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "./Userpool";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import cloud from "../Assets/cloud.png"
import acnLogo from "../Assets/acnlogo.png"
import { useHistory } from "react-router";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Verify() {
    let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

    if(localStorage.getItem("successsemail")==null){
        history.push("/signup");
        window.location.reload();   
    }

    const [code, setCode] = useState("");


   const clientID =localStorage.getItem("clientID")
   const userPoolID = localStorage.getItem("userPoolId")
  const signEmail = localStorage.getItem("successsemail")


   const clientIDFormatted =clientID.replace(/['"]+/g, '')
   const userPoolIDFormatted = userPoolID.replace(/['"]+/g, '')
   const signEmailFormatted = signEmail.replace(/['"]+/g, '')
 



    const onSubmit = (event) => {

        console.log(
        )
        event.preventDefault();

        var poolData = {
            UserPoolId : userPoolIDFormatted, // Your user pool id here
            ClientId : clientIDFormatted  // Your client id here
        };
     
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username : signEmailFormatted,
            Pool : userPool
        };
     
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.confirmRegistration(code, true, function(err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
            alert(result)
            if(result.includes("SUCCESS")){
                history.push("/");
            }else{
                history.push("/verify"); 
            }
        });
    };



    if(localStorage.getItem("onSuccess")!=null){
        history.push("/createInstance")
    }

    return (
        <>
            <div>
                <img className="cloud" src={cloud} />
                <p className="management" style={{ fontFamily: 'Graphik' }}>Management</p>
                <p className="connect" style={{ fontFamily: 'Graphik' }}>Connect</p>
                <div className="Container">
                    <form onSubmit={onSubmit}>
                        <img className="acn" src={acnLogo}></img>
                        <p style={{ fontFamily: 'Graphik' }} className="SignupText">Verify Email</p>
                        <p style={{ fontFamily: 'Roboto' }} className="userTextS">Code</p>
                        <input style={{ fontFamily: 'Roboto' }} 
                            onChange={(event) => setCode(event.target.value)} type="text" required className="inputText" placeholder="Please input Code"></input>
                      

                        <Button variant="contained" style={{
                            backgroundColor: '#3E66FB',
                            position: 'absolute',
                            top: '82%',
                            left: '27%',
                            fontFamily: 'graphik',
                            width: '50%',
                            height: '10%',
                            Radius: '30px',
                            borderRadius: '30px',
                            fontSize: '14px',
                            color: '#FFFFFF',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '15px',

                        }} type="submit">
                            Verify
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
