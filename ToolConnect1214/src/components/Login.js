
import React from 'react';
import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./Userpool";
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
import cloud from "../Assets/cloud.png"
import acnLogo from "../Assets/acnlogo.png"
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Login() {
    let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

    // const Loginnow = () => {
    //     // history.push("/createInstance");
    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
                alert("Log in Successfully!")

                localStorage.setItem("onSuccess",data)
                history.push("/createInstance");

            },
            onFailure: (err) => {
                console.error("onFailure: ", err);
                alert(err)
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            },
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
                    <p style={{ fontFamily: 'Graphik' }} className="loginText">Login</p>
                    <p style={{ fontFamily: 'Roboto' }} className="userText">Email address</p>
                    <input style={{ fontFamily: 'Roboto' }} value={email}
                        onChange={(event) => setEmail(event.target.value)} type="text" className="inputText" placeholder="Please input Email Address"></input>
                    <p style={{ fontFamily: 'Roboto' }} className="passText">Password</p>
                    <a href=""><p style={{ fontFamily: 'Roboto' }} className="forgot">Forgot Password</p></a>
                    <input style={{ fontFamily: 'Roboto' }} value={password}
                        onChange={(event) => setPassword(event.target.value)} type="password" className="inputPass" placeholder="Please input password"></input>
                    <p>{console.log(password)}</p>

                    <FormControlLabel className="me" control={<Checkbox defaultChecked />} label="Remember me" />
                    <a href="/Signup"><p style={{ fontFamily: 'Roboto',    marginTop: "94%",paddingLeft:"10%" }} >Create Account</p></a>

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

                    }}  type="submit">
                         
                        Log in
                    </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
