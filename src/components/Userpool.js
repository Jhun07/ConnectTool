// import { CognitoUserPool } from "amazon-cognito-identity-js";
// var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

// var poolData = {
//   UserPoolId: "us-east-1_VRkAMV7l0", // Your user pool id here
//   ClientId: "6geao1gorce8eeju44u75j75lt", // Your client id here
// };
// var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// var attributeList = [];

// var dataEmail = {
//   Name: "cath",
//   Value: "cathyrine.marpa@accenture.com",
// };

// var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

// attributeList.push(attributeEmail);

// userPool.signUp(
//   "username",
//   "password",
//   attributeList,
//   null,
//   function (err, result) {
//     if (err) {
//       alert(err.message || JSON.stringify(err));
//       return;
//     }
//     var cognitoUser = result.user;
//     console.log("user name is " + cognitoUser.getUsername());
//   }
// );

// export default new CognitoUserPool(poolData);

// import { CognitoUserPool } from "amazon-cognito-identity-js";

// const poolData = {
//   UserPoolId: "us-east-1_VRkAMV7l0",
//   ClientId: "6geao1gorce8eeju44u75j75lt",
// };

// export default new CognitoUserPool(poolData);

import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_VRkAMV7l0",
  ClientId: "5kdaqeusdjjeoc277ascqsp2vr",
};

export default new CognitoUserPool(poolData);
