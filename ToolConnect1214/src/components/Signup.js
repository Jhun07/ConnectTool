
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

export default function Signup() {
    let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

    const Signupnow = () => {
        history.push("/createInstance");
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    var poolData = {
        UserPoolId: "us-east-1_VRkAMV7l0", // Your user pool id here
        ClientId: "5kdaqeusdjjeoc277ascqsp2vr", // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const dataName = new CognitoUserAttribute({
        Name: "name",
        Value: "cath",
    });

    const dataGivenname = new CognitoUserAttribute({
        Name: "given_name",
        Value: "marpa",
    });

    var authenticationData = {
        Username: "...", // your username here
        Password: "...", // your password here
    };

    const onSubmit = (event) => {
        event.preventDefault();

        userPool.signUp(
            username,
            password,
            [dataName, dataGivenname],
            null,
            function (err, result) {
                if (err) {
                     const results=(err.message || JSON.stringify(err));

                     alert(results)

                     
            
               
                    return;
                }
                var cognitoUser = result.user;
                console.log(
                    "user name is " + cognitoUser.getUsername() + JSON.stringify(result)
                );
                localStorage.setItem("clientID",JSON.stringify(result.user.pool.clientId))
                localStorage.setItem("userPoolId",JSON.stringify(result.user.pool.userPoolId))
                localStorage.setItem("successsemail",cognitoUser.getUsername() )
                history.push("/verify")


            }
        );
        if(localStorage.getItem("onSuccess")!=null){
            history.push("/createInstance")
        }
    
    };
   
    return (
        <>
            <div>
                <img className="cloud" src={cloud} />
                <p className="management" style={{ fontFamily: 'Graphik' }}>Management</p>
                <p className="connect" style={{ fontFamily: 'Graphik' }}>Connect</p>
                <div className="Container">
                    <form onSubmit={onSubmit}>
                        <img className="acn" src={acnLogo}></img>
                        <p style={{ fontFamily: 'Graphik' }} className="SignupText">Signup</p>
                        <p style={{ fontFamily: 'Roboto' }} className="userTextS">Email Address</p>
                        <input style={{ fontFamily: 'Roboto' }} value={username}
                            onChange={(event) => setUsername(event.target.value)} type="email" required className="inputText" placeholder="Please input Email address"></input>
                        <p style={{ fontFamily: 'Roboto' }} className="passText">Password</p>
                        <a href=""><p style={{ fontFamily: 'Roboto' }} className="forgot">Forgot Password</p></a>
                        <input style={{ fontFamily: 'Roboto' }} value={password}
                            onChange={(event) => setPassword(event.target.value)} type="password" required className="inputPass" placeholder="Please input password"></input>
                        <p>{console.log(password)}</p>
                        <FormControlLabel className="me" control={<Checkbox defaultChecked />} label="Remember me" />
                        <a href="/"><p style={{ fontFamily: 'Roboto',    marginTop: "94%",paddingLeft:"10%" }} >Log in</p></a>

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
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
