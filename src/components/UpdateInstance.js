import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useState, useEffect } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import Swal from "sweetalert2"; //IMPORT FOR THE SWAL
import Card from "@mui/material/Card";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory } from "react-router";
import create1 from "./../Assets/createD.png";
import update from "./../Assets/updateD.png";
import createImage from "./../Assets/createImage.png";
import picDef from "./../Assets/dtas.png";
import { toast } from "react-toastify";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// for icons
import Acnlogo from "./../Assets/acnlogo.png";
import Acntext from "./../Assets/acntext.png";
import iconfig from "./../Assets/instanceCon.png";
import setting from "./../Assets/setting.png";
import notify from "./../Assets/notify.png";
import logout from "./../Assets/logout.png";
import terms from "./../Assets/terms.png";

import contactFlow from "./../Assets/contactFlow.png";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

///SIDEBAR
import * as ReactDOM from 'react-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//for header
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";


import "react-toastify/dist/ReactToastify.css";

const drawerWidth = 300;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
 
// import { useHistory } from "react-router-dom"; // allows us to access our path / route history.
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    backgroundColor: "rgb(37,47,62)"
  }
}));


toast.configure();


function Update() {

  let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

  if(localStorage.getItem("onSuccess")==null){
    history.push("/")

 }
  //classes
  const classes = useStyles();

  // for drawer
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  // end for drawer

  const [InstanceAlias, setInstanceAlias] = useState("");
  const [Origin, setOrigin] = useState("");

  ///CALL RECORDINGS
  const [clBucket, setClBucket] = useState("");
  const [clPrefix, setClPrefix] = useState("");
  const [clKMSKeyARN, setClKMSKeyARN] = useState("");

  ///CHAT_TRANSCRIPTS
  const [ctBucket, setCtBucket] = useState("");
  const [ctPrefix, setCtPrefix] = useState("");
  const [ctKMSKeyARN, setCtKMSKeyARN] = useState("");

  ///MEDIA_STREAMS
  const [msPrefix, setMsPrefix] = useState("");
  const [msKMSKeyId, setMsKMSKeyId] = useState("");

  ///SCHEDULED_REPORTS
  const [srBucket, setSrBucket] = useState("");
  const [srPrefix, setSrPrefix] = useState("");
  const [srKMSKeyARN, setSrKMSKeyARN] = useState("");

  ///CONTACT_TRACE_RECORDS
  const [ctrStreamArn, setCtrStreamArn] = useState("");

  ///LEX BOTS
  const [lexBots, setLexBots] = useState("");

  const [lexRegion, setLexRegion] = useState("");

  ///AWS LAMBDA
  const [Lambda, setLambda] = useState("");


  const path = "/updateinstance";

  const isLoaded = [true];
  useEffect(() => {
    // document.getElementById("originBtn").disabled=true;
    document.getElementById("dsBtn").disabled = true;
    document.getElementById("datastreamingBtn").disabled = true;
    document.getElementById("lambdaBtn").disabled = true;
    document.getElementById("lexBtn").disabled = true;
    document.getElementById("originBtn").disabled = true;
  }, isLoaded);

  function originFunc() {
    if (Origin !== "" && InstanceAlias !== "") {
      document.getElementById("originBtn").disabled = false;
    } else {
      document.getElementById("originBtn").disabled = true;
    }
  }

  function dataStorageFunc() {
    if (InstanceAlias !== "") {
      if (
        clBucket !== "" ||
        clPrefix !== "" ||
        clKMSKeyARN !== "" ||
        ctBucket !== "" ||
        ctKMSKeyARN !== "" ||
        msPrefix !== "" ||
        msKMSKeyId !== "" ||
        srPrefix !== "" ||
        srKMSKeyARN !== "" ||
        srBucket !== "" ||
        ctPrefix !== ""
      ) {
        document.getElementById("dsBtn").disabled = false;
      } else {
        document.getElementById("dsBtn").disabled = true;
      }
    } else {
      document.getElementById("dsBtn").disabled = true;
    }
  }

  function datastreamingFunc() {
    if (ctrStreamArn !== "" && InstanceAlias !== "") {
      document.getElementById("datastreamingBtn").disabled = false;
    } else {
      document.getElementById("datastreamingBtn").disabled = true;
    }
  }

  function lambdaFunc() {
    if ( InstanceAlias !== "") {
      document.getElementById("lambdaBtn").disabled = false;
    } else {
      document.getElementById("lambdaBtn").disabled = true;
    }
  }

  function lexFunc() {
    if (lexBots !== "" && InstanceAlias !== "" && lexRegion !== "") {
      document.getElementById("lexBtn").disabled = false;
    } else {
      document.getElementById("lexBtn").disabled = true;
    }
  }

  ////DISABLE BUTTON CONFIGURATION

  function save() {
    var data = {
      InstanceAlias,
      Origin,
      path,
      CALL_RECORDINGS: {
        BucketName: clBucket.trim(),
        Prefix: clPrefix.trim(),
        KMSKeyARN: clKMSKeyARN.trim(),
      },
      CHAT_TRANSCRIPTS: {
        BucketName: ctBucket.trim(),
        Prefix: ctPrefix.trim(),
        KMSKeyARN: ctKMSKeyARN.trim(),
      },
      MEDIA_STREAMS: {
        Prefix: msPrefix.trim(),
        KMSKeyId: msKMSKeyId.trim(),
      },
      SCHEDULED_REPORTS: {
        BucketName: srBucket.trim(),
        Prefix: srPrefix.trim(),
        KMSKeyARN: srKMSKeyARN.trim(),
      },
      CONTACT_TRACE_RECORDS_StreamArn: {
        StreamArn: ctrStreamArn.trim(),
      },
      lexBots: {
        BotName: lexBots.trim(),
        Region: lexRegion.trim(),
      },
      Lambda: [Lambda.trim()],
    };

    const url = "https://awscap-connect-restapi.acn-atcp.com/updateinstance";

    Axios.put(url, data, {}).then((res) => {
      console.log(res.data);

      const idx = 0; // add the index for which you want value
      var key = Object.keys(JSON.stringify(res.data.body))[idx];
      const value = JSON.stringify(res.data.body)[key];
      const instanceDisplay = (key, value); // key2 value2

      const idx1 = 1; // add the index for which you want value
      var key1 = Object.keys(res.data.body)[idx1];

      const value1 = res.data.body[key1];
      console.log("key1" + value1);
      const dataStorage = (key1, value1); // key2 value2

      // console.log(dataStorage.CallRecord.split(":"))

      const idx2 = 2; // add the index for which you want value
      var key2 = Object.keys(JSON.stringify(res.data.body))[idx2];
      const value2 = JSON.stringify(res.data.body)[key2];
      const Origin = (key2, value2); // key2 value2

      const idx3 = 3; // add the index for which you want value
      var key3 = Object.keys(JSON.stringify(res.data.body))[idx3];
      const value3 = JSON.stringify(res.data.body)[key3];
      const Lex = (key3, value3); // key2 value2

      const idx4 = 4; // add the index for which you want value
      var key4 = Object.keys(res.data.body)[idx4];
      const value4 = res.data.body[key4];
      const Lambda = (key4, value4); // key2 value2

      let arrayOfUpdates = [];
      const updatedSuccessfully = "Updated Successfully";
      if (Origin.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("added origin");
      }
      if (Lambda.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated lambda function");
      }
      if (dataStorage.CallRecord.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated data storage");
      }
      if (dataStorage.ChatTranscripts.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated data storage");
      }
      if (dataStorage.MediaStream.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated data storage");
      }
      if (dataStorage.Reports.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated data storage");
      }
      if (dataStorage.CTR.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated data streaming");
      }
      if (Lex.includes(updatedSuccessfully)) {
        arrayOfUpdates.push("updated lex bot");
      }

      const stringOfUpdates = JSON.stringify(arrayOfUpdates);
      //const UpdatesFormat = stringOfUpdates.replaceAll('"', "");
      const UpdatesFormat1 = stringOfUpdates.replaceAll('"', "");
      const UpdatesFormat2 = UpdatesFormat1.replaceAll("[", "");
      const UpdatesFormat = UpdatesFormat2.replaceAll("]", "");
      console.log(UpdatesFormat);

      console.log(arrayOfUpdates);
      let removeDuplicatesofarrayOfUpdates = [...new Set(arrayOfUpdates)];

      for (let i = 0; i < removeDuplicatesofarrayOfUpdates.length; i++) {
        if (removeDuplicatesofarrayOfUpdates[i].includes("added origin")) {
          const CustomToast = (c) => {
            return (
              <>
                <div clasName="card" style={{ width: "150%" }}>
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <br></br>
                    <h6
                      className="card-title"
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2.1rem",
                        color: "white",
                      }}
                    >
                      Successfully
                    </h6>
                    <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2.1rem",
                        color: "white",
                      }}
                    >
                      added origin
                    </h6>
                    <br></br>
                    <img
                      src={createImage}
                      style={{
                        marginRight: "  2%",
                        height: "50%",
                        width: "26%",
                        marginBottom: "-9px",
                      }}
                    ></img>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                </div>
              </>
            );
          };

          toast.info(<CustomToast />, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: true,
            width: "500%",
            icon: "",
          });
        }

        if (
          removeDuplicatesofarrayOfUpdates[i].includes("updated data storage")
        ) {
          const CustomToast = (c) => {
            return (
              <>
                <div clasName="card" style={{ width: "150%" }}>
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <br></br>
                    <h6
                      className="card-title"
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        paddingBottom: "45%",
                      }}
                    >
                      Successfully{" "}
                    </h6>
                    <br></br> <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginLeft: "-48%",
                      }}
                    >
                      updated
                    </h6>
                    <br></br> <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      {" "}
                      Data storage
                    </h6>
                    <br></br>
                    <img
                      src={createImage}
                      style={{
                        marginRight: "  2%",
                        height: "50%",
                        width: "26%",
                        marginBottom: "-9px",
                      }}
                    ></img>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                </div>
              </>
            );
          };

          toast.info(<CustomToast />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: true,
            width: "500%",
            icon: "",
          });
        }
        if (
          removeDuplicatesofarrayOfUpdates[i].includes("updated data streaming")
        ) {
          const CustomToast = (c) => {
            return (
              <>
                <div clasName="card" style={{ width: "150%" }}>
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <br></br>
                    <h6
                      className="card-title"
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        paddingBottom: "17%",
                      }}
                    >
                      Successfully{" "}
                    </h6>
                    <br></br> <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginLeft: "-48%",
                      }}
                    >
                      updated
                    </h6>
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginTop: "-5%",
                      }}
                    >
                      {" "}
                      Data streaming
                    </h6>
                    <br></br>
                    <img
                      src={createImage}
                      style={{
                        marginLeft: "  50%",
                        height: "50%",
                        width: "26%",
                        marginBottom: "-3%",
                      }}
                    ></img>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                </div>
              </>
            );
          };

          toast.info(<CustomToast />, {
            position: toast.POSITION.MIDDLE_LEFT,
            autoClose: true,
            width: "500%",
            icon: "",
          });
        }
        if (
          removeDuplicatesofarrayOfUpdates[i].includes(
            "updated lambda function"
          )
        ) {
          const CustomToast = (c) => {
            return (
              <>
                <div clasName="card" style={{ width: "150%" }}>
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <br></br>
                    <h6
                      className="card-title"
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      Successfully{" "}
                    </h6>
                    <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginLeft: "-48%",
                        marginTop: "4%",
                      }}
                    >
                      updated
                    </h6>
                    <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginTop: "8%",
                      }}
                    >
                      lambda function
                    </h6>
                    <br></br>
                    <br></br>
                    <img
                      src={createImage}
                      style={{
                        marginLeft: "  50%",
                        height: "50%",
                        width: "26%",
                        marginBottom: "-9px",
                      }}
                    ></img>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                </div>
              </>
            );
          };

          toast.info(<CustomToast />, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: true,
            width: "500%",
            icon: "",
          });
        }
        if (removeDuplicatesofarrayOfUpdates[i].includes("updated lex bot")) {
          const CustomToast = (c) => {
            return (
              <>
                <div clasName="card" style={{ width: "150%" }}>
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <br></br>
                    <h6
                      className="card-title"
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      Successfully{" "}
                    </h6>
                    <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                        marginLeft: "-48%",
                        marginTop: "3%",
                      }}
                    >
                      updated
                    </h6>
                    <br></br>{" "}
                    <h6
                      style={{
                        float: "left",
                        fontFamily: "Arial",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      lex bot
                    </h6>
                    <br></br>
                    <br></br>
                    <img
                      src={createImage}
                      style={{
                        marginLeft: "  50%",
                        height: "50%",
                        width: "26%",
                        marginBottom: "-9px",
                        marginTop: "7%",
                      }}
                    ></img>
                  </div>
                  <div className="card-body">
                    <br></br>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "13px",
                        float: "left",
                      }}
                    ></p>
                  </div>
                </div>
              </>
            );
          };

          toast.info(<CustomToast />, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: true,
            width: "500%",
            icon: "",
          });
        }
      }
      if (removeDuplicatesofarrayOfUpdates.length == 0) {
        const okay = '<b style="color: white;">Okay</b>';
        const title = `<b style="color: white;  font-family: Graphik">No updates applied! </b>`;
        Swal.fire({
          title: title,
          icon: "warning",
          confirmButtonColor: "#63b8a7",
          customClass: "Custom_Cancel",
          confirmButtonText: okay,
          background: "#ff5148",
        });
      }
    });
  }
  let redirect = useHistory();

  if (
    localStorage.getItem("createdInstance") == null &&
    localStorage.getItem("updatedInstance") == null
  ) {
    Swal.fire({
      title: `<b style="color: white; font-size: 20px">Oops! </b>`,
      html: `<b style="color: white; font-size: 13px">Please create an instance first! </b>`,
      icon: "warning",

      confirmButtonColor: "#63b8a7",
      customClass: "Custom_Cancel",
      confirmButtonText: '<b style="color: white;">Okay</b>',
      background: "#ff5148",
    });
    redirect.push("/");
  }

  const Logout =()=>{
    localStorage.removeItem("onSuccess")
    history.push("/")

  }
 
  return (
    <>
      <Box sx={{ display: 'flex',  marginLeft: '1.5%' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton

                color="inherit"

                aria-label="open drawer"

                onClick={handleDrawerOpen}

                edge="start"

                sx={{

                  ...(open && { display: "none" }),

                  color: "black",

                  marginLeft: "3%",

                  width: "10%",

                }}

              >

                <KeyboardDoubleArrowRightIcon />

              </IconButton>

              <h1 className="aws-text"> CONNECT MANAGEMENT TOOL</h1>
              <IconButton sx={{



                marginLeft: "50%"

              }} onClick={Logout}>

                <b> <span className="logout-text">Log out</span></b>



                <div

                  style={{

                    display: "flex",

                    alignItems: "center",

                    flexWrap: "wrap",

                    marginTop: "10%"

                  }}

                >

                  <LogoutIcon />

                </div>

              </IconButton>





              <IconButton sx={{



                marginLeft: "-15%"

              }} />


            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} classes={{ paper: classes.paper }}>
            <DrawerHeader>

              <Typography sx={{ color: 'white', fontStyle: 'Graphik' }} variant="h6" noWrap component="div">
                <img src={Acnlogo} style={{ marginLeft: '4%', width: '20%', height: '50%' }} />Accenture
                {/* <img src={Acntext} style={{marginLeft: '4%', width: '50%', height: '90%'}}/>  */}
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            {/* <Divider /> */}<br /><br /><br /><br /><br />
            {/* <List>
          <a href ="/createInstance" className="btn sidebaricon"
          style={{ fontSize: "15px", width: '100%'}}
        ><img src={iconfig} />&nbsp; &nbsp; Instance Configuration</a>
          </List>
        
          <List >
          <a href ="/updateInstance" className="btn sidebaricon"
          style={{ fontSize: "15px", width: '100%'}}
        ><img src={contactFlow} />&nbsp;Contact Flow Management</a>
     
          </List> */}
            <List
              sx={{ width: '100%', maxWidth: 360, color: 'white' }}
              component="nav"
              aria-labelledby="nested-list-subheader"

            >

              <ListItemButton onClick={handleClick1}>
                <ListItemIcon>
                  <img src={iconfig} />
                </ListItemIcon>
                <ListItemText primary="Instance Configuration" />
                {open1 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 9 }}>
                    <a href='/createInstance' style={{ textDecoration: 'none', color: 'white' }}> <ListItemText primary="Create Instance" /></a>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 9 }}>
                    <a href='/updateInstance' style={{ textDecoration: 'none', color: 'white' }}>  <ListItemText primary="Update Instance" /></a>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton>
                <ListItemIcon>
                  <img src={contactFlow} />
                </ListItemIcon>
                <ListItemText primary="Contact Flow Management" />
              </ListItemButton>
            </List>
            <Typography
              sx={{
                position: 'absolute',
                left: '15.33%',
                right: '10.67%',
                top: '20%',
                bottom: '83.06%',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '13px',
                lineHeight: '120%',
                /* or 29px */

                display: 'flex',
                alignItems: 'center',
                letterSpacing: '0.015em',
                color: '#FFFFFF'
              }}
            ><span style={{ fontFamily: 'Graphik', color: 'white', fontSize: '25px' }} className="aws-text">Connect<br /><br />Management <br /><br />Tool</span></Typography>

            <br />
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: '#252F3E', color: 'white' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader sx={{ bgcolor: '#252F3E', color: 'white' }} component="div" id="nested-list-subheader">
                  Settings
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <img src={setting} />
                </ListItemIcon>
                <ListItemText primary="Main Settings" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <img src={notify} />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <img src={logout} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton><br />
              <ListItemButton>
                <ListItemIcon>
                  <img src={terms} />
                </ListItemIcon>
                <ListItemText primary="Terms of Use" />
              </ListItemButton>
            </List>

          </Drawer>
       
         
    <Box>   <br />    <br />    <br />  <br />
    <div className="container">
      <div id="create" style={{ top: "12px" }}>
        <img id="createImg" src={create1} />
        <a
          href="/createInstance"
          style={{ textDecoration: "none", color: "#B0B0B0" }}
        >
          <span
            id="createInstanceD"
            style={{
              fontFamily: "Graphik",
              fontSize: "14px",
              marginLeft: "15px",
              marginTop: "-5%",
            }}
          >
            {" "}
            Create <br />
            Instance
          </span>
        </a>
      </div>

      <div id="update">
        <img id="updateImg" src={update} />
        <a
          href="/updateInstance"
          style={{ textDecoration: "none" }}
        >
          <p
            id="updateInstance"
            style={{
              fontFamily: "Graphik",
              marginLeft: "42px",
              fontSize: "14px",
              marginTop: "-8%",
              color: "black"
            }}
          >
            Update <br /> Instance
          </p>
        </a>
        <div id="color"></div>
      </div>

      <Typography
        id="Typo1"
        style={{
          fontFamily: "Graphik",
          fontSize: "21px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "28px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        Update Instance
      </Typography>
      <hr id="divider" />
      <div id="outlinedU">
        <TextField
          id="outlinedF"
          label="Instance Name"
          variant="outlined"
          onChange={(event) => {
            setInstanceAlias(event.target.value);
          }}
          onKeyUp={() => {
            originFunc();
            dataStorageFunc();
            lambdaFunc();
            datastreamingFunc();
            lexFunc();
          }}
        />
      </div>
      <FormHelperText sx={{ marginLeft: "10px", marginTop: "-40px" }}>
        Click dropdown to show all editable instances.{" "}
      </FormHelperText>
      <br />
      <div id="containerTab" class="container">
        <ul class="nav nav-tabs w-100" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              style={{
                color: "#252F3E",
                fontFamily: "Graphik",
                fontSize: "14px",
              }}
              href="#origin"
            >
              Origin
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link "
              data-toggle="tab"
              style={{
                color: "#252F3E",
                fontFamily: "Graphik",
                fontSize: "14px",
              }}
              href="#dataStorage"
            >
              Data Storage
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              style={{
                color: "#252F3E",
                fontFamily: "Graphik",
                fontSize: "14px",
              }}
              href="#dataStreaming"
            >
              Data Streaming
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              style={{
                color: "#252F3E",
                fontFamily: "Graphik",
                fontSize: "14px",
              }}
              href="#lambdaFunction"
            >
              Lambda Function
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              style={{
                color: "#252F3E",
                fontFamily: "Graphik",
                fontSize: "14px",
              }}
              href="#lexBot"
            >
              Lex Bot
            </a>
          </li>
        </ul>

        <Card style={{ width: "160%" }}>
          <div class="tab-content">
            <div id="origin" class="container tab-pane active">
              <br />
              <div>
                {/* <Card style={{ width: '75%' }}> */}
                <div>
                  <TextField
                    id="outlined4"
                    label="Origin"
                    variant="outlined"
                    onChange={(event) => {
                      setOrigin(event.target.value);
                    }}
                    onKeyUp={originFunc}
                    sx={{ height: "100%" }}
                  />
                  <br />{" "}
                  <FormHelperText sx={{ marginLeft: "10px", marginTop: "1px" }}>
                    Sample origin name here..
                  </FormHelperText>{" "}
                  <br />
                  <button
                    onClick={save}
                    id="originBtn"
                    style={{
                      background: "#3E66FB",
                      borderRadius: "50px",
                      padding: "12px",
                      fontFamily: "Roboto",
                      color: "white",
                    }}
                  >
                    &nbsp;+&nbsp;ADD ORIGIN
                  </button>
                </div>{" "}
                <br />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <input type="checkbox" id="check" />{" "}
              <label className="chat-btn" htmlFor="check">
                {" "}
                <i className="fa fa-file-text" />{" "}
              </label>
              <div className="wrapper">
           
                <div className="chat-form">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={picDef}
                      alt="Description Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-22%" }}>
                        <b>Approved Domains</b>
                      </h5>
                      <p className="card-text">
                        Amazon Connect can integrate with other products
                        including Customer Relationship Management (CRM) and
                        Workforce Management (WFM) products. Click on the link
                        for details on how to setup integrations with Amazon
                        Connect.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div id="dataStorage" class="container tab-pane fade">
              <br />
              <div>
                <div>
                  <Typography
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "28px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Call Recordings
                  </Typography>
                  <br />
                  <div>
                    <TextField
                      id="outlined1"
                      label="S3 Bucket Name"
                      variant="outlined"
                      onChange={(event) => {
                        setClBucket(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />{" "}
                    &nbsp;&nbsp;
                    <TextField
                      id="second"
                      label="Prefix"
                      variant="outlined"
                      onChange={(event) => {
                        setClPrefix(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />{" "}
                    &nbsp;&nbsp;
                    <TextField
                      id="outlined3"
                      label="KMS Key ARN"
                      variant="outlined"
                      onChange={(event) => {
                        setClKMSKeyARN(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                  </div>
                  <FormHelperText sx={{ marginLeft: "5px", marginTop: "1px" }}>
                    Sample S3 bucket name here..
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: "23%", marginTop: "-20px" }}
                  >
                    Sample Prefix name here..
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: "44%", marginTop: "-20px" }}
                  >
                    Sample KMS Key ARN here..
                  </FormHelperText>
                  <br />
                  <Typography
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "28px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Chat Transcript
                  </Typography>
                  <br />
                  <div>
                    <TextField
                      id="outlined4"
                      label="S3 Bucket Name"
                      variant="outlined"
                      onChange={(event) => {
                        setCtBucket(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                    &nbsp; &nbsp;
                    <TextField
                      id="outlined5"
                      label="Prefix"
                      variant="outlined"
                      onChange={(event) => {
                        setCtPrefix(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                    &nbsp;&nbsp;
                    <TextField
                      id="outlined6"
                      label="KMS Key ARN"
                      variant="outlined"
                      onChange={(event) => {
                        setCtKMSKeyARN(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                  </div>
                  <FormHelperText sx={{ marginLeft: "5px", marginTop: "1px" }}>
                    Sample S3 bucket name here..
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: "23%", marginTop: "-20px" }}
                  >
                    Sample Prefix name here..
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: "44%", marginTop: "-20px" }}
                  >
                    Sample KMS Key ARN here..
                  </FormHelperText>
                  <br />
                  <Typography
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "28px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Live Media Streaming
                  </Typography>
                  <br />
                  <div>
                    <TextField
                      id="outlined7"
                      label="Prefix"
                      variant="outlined"
                      onChange={(event) => {
                        setMsPrefix(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 275 }}
                    />
                    &nbsp;&nbsp;
                    <TextField
                      id="outlined8"
                      label="KMS Key ID"
                      variant="outlined"
                      onChange={(event) => {
                        setMsKMSKeyId(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 275 }}
                    />
                    <FormHelperText
                      sx={{ marginLeft: "5px", marginTop: "1px" }}
                    >
                      Sample Prefix name here..
                    </FormHelperText>
                    <FormHelperText
                      sx={{ marginLeft: "33%", marginTop: "-20px" }}
                    >
                      Sample KMS Key ID here..
                    </FormHelperText>
                  </div>
                  <br />
                  <Typography
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "28px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Schedule Reports
                  </Typography>
                  <br />
                  <div>
                    <TextField
                      id="outlined10"
                      label="S3 Bucket Name"
                      variant="outlined"
                      onChange={(event) => {
                        setSrBucket(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                    &nbsp;&nbsp;
                    <TextField
                      id="outlined11"
                      label="Prefix"
                      variant="outlined"
                      onChange={(event) => {
                        setSrPrefix(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                    &nbsp;&nbsp;
                    <TextField
                      id="outlined12"
                      label="KMS Key ARN"
                      variant="outlined"
                      onChange={(event) => {
                        setSrKMSKeyARN(event.target.value);
                      }}
                      onKeyUp={dataStorageFunc}
                      style={{ width: 180 }}
                    />
                    <FormHelperText
                      sx={{ marginLeft: "5px", marginTop: "1px" }}
                    >
                      Sample S3 bucket name here..
                    </FormHelperText>
                    <FormHelperText
                      sx={{ marginLeft: "23%", marginTop: "-20px" }}
                    >
                      Sample Prefix name here..
                    </FormHelperText>
                    <FormHelperText
                      sx={{ marginLeft: "44%", marginTop: "-20px" }}
                    >
                      Sample KMS Key ARN here..
                    </FormHelperText>
                  </div>
                  <br />
                  <button
                    id="dsBtn"
                    onClick={save}
                    style={{
                      background: "#3E66FB",
                      borderRadius: "50px",
                      padding: "12px",
                      fontFamily: "Roboto",
                      color: "white",
                    }}
                  >
                    &nbsp;+&nbsp;ASSOCIATE STORAGE
                  </button>
                </div>
              </div>

           
              <input type="checkbox" id="check2" />{" "}
              <label className="chat-btn2" htmlFor="check2">
                {" "}
                <i className="fa fa-file-text" />{" "}
              </label>
              <div className="wrapper2">
              
                <div className="chat-form2">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={picDef}
                      alt="Description Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-8%" }}>
                        <b>Data Storage</b>
                      </h5>
                      <p className="card-text">
                      Saving Amazon Connect data such as call recordings or
                    scheduled reports requires access to an Amazon S3 bucket.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
                </div>


            
            </div>{" "}
            <br />
            <div id="dataStreaming" class="container tab-pane fade">
              <br />
              <div>
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Contact Trace Records
                </Typography>
                <br />
                <div>
                  <TextField
                    id="outlined1"
                    label="Kinesis Stream ARN"
                    variant="outlined"
                    onChange={(event) => {
                      setCtrStreamArn(event.target.value);
                    }}
                    onKeyUp={datastreamingFunc}
                  />
                  <FormHelperText sx={{ marginLeft: "10px", marginTop: "1px" }}>
                    Sample Kinesis Stream ARN here..
                  </FormHelperText>
                </div>
                <br />
                <button
                  id="datastreamingBtn"
                  onClick={save}
                  style={{
                    background: "#3E66FB",
                    borderRadius: "50px",
                    padding: "12px",
                    fontFamily: "Roboto",
                    color: "white",
                  }}
                >
                  &nbsp;✓ &nbsp;ENABLE CTR
                </button>
              </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <input type="checkbox" id="check3" />{" "}
              <label className="chat-btn3" htmlFor="check3">
                {" "}
                <i className="fa fa-file-text" />{" "}
              </label>
              <div className="wrapper3">
              
                <div className="chat-form3">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={picDef}
                      alt="Description Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-22%" }}>
                        <b>Data Streaming</b>
                      </h5>
                      <p className="card-text">
                      You can export Contact Trace Records (CTRs) and agent event
                    from Amazon Connect to analyze your data. Get started by
                    enabling data streaming and using the kinesis video stream
                    or Kinesis Data Firehouse delivery stream to export your
                    data.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
                </div>
             
             
            </div>
            <br />
            <div id="lambdaFunction" class="container tab-pane fade">
              <br />
              <div>
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Lambda Function
                </Typography>
                <br />
                <div>
                  {/* <TextField
                    id="outlined1"
                    label="Kinesis Stream ARN"
                    variant="outlined"
                    onChange={(event) => {
                      setLambda(event.target.value);
                    }}
                    onKeyUp={lambdaFunc}
                  /> */}
                  <FormControl id="outlined11" style={{border: '1px solid black',borderRadius: '9px!important'}} variant="standard">
                    <InputLabel id="outlined1">Lambda Function</InputLabel>
                    <Select
                      labelId="Instance Name"
                      id="outlined1"
                      value={Lambda}
                      onChange={(event) => {
                        setLambda(event.target.value);
                      }}
                      onKeyUp={lambdaFunc}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="arn:aws:lambda:us-east-1:799514251020:function:AWSInnov-FAQ-PMO">arn:aws:lambda:us-east-1:799514251020:function:AWSInnov-FAQ-PMO</MenuItem>
                     
                    </Select>
                  </FormControl>
                  <FormHelperText sx={{ marginLeft: "10px", marginTop: "1px" }}>
                    Sample Kinesis Stream ARN here..
                  </FormHelperText>
                </div>
                <br />
                <button
                  id="lambdaBtn"
                  onClick={save}
                  style={{
                    background: "#3E66FB",
                    borderRadius: "50px",
                    padding: "12px",
                    fontFamily: "Roboto",
                    color: "white",
                  }}
                >
                  &nbsp;+&nbsp; ADD LAMBDA
                </button>
              </div>
              <br />
                <br />
                <br />
                <br />
                <br />
                <br />

              <input type="checkbox" id="check4" />{" "}
              <label className="chat-btn4" htmlFor="check4">
                {" "}
                <i className="fa fa-file-text" />{" "}
              </label>
              <div className="wrapper4">
           
                <div className="chat-form4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={picDef}
                      alt="Description Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-8%" }}>
                      <b>AWS Lambda</b>
                      </h5>
                      <p className="card-text">
                      By using AWS Lambda function, you can retrieve data from the
                    database and other services. Based of the data returned, the
                    contact can be routed to the appropriate contact flow
                    branch. By adding Lambda functions, you granting Amazon
                    Connect permission to invoke them.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
          
      
              <br />
              <br />
            </div>
            <br />
            <div id="lexBot" class="container tab-pane fade">
              <br />
              <div>
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Amazon Lex Bot
                </Typography>
                <br />
                <div>
                  <TextField
                    id="outlined4"
                    label="Lex Bot Region"
                    variant="outlined"
                    onChange={(event) => {
                      setLexRegion(event.target.value);
                    }}
                    onKeyUp={lexFunc}
                    style={{ width: 275 }}
                  />
                  &nbsp; &nbsp;
                  <TextField
                    id="outlined5"
                    label="Lex Bot Name"
                    variant="outlined"
                    onChange={(event) => {
                      setLexBots(event.target.value);
                    }}
                    onKeyUp={lexFunc}
                    style={{ width: 275 }}
                  />
                  <FormHelperText sx={{ marginLeft: "5px", marginTop: "1px" }}>
                    Sample Lex Bot Region here..
                  </FormHelperText>
                  <FormHelperText
                    sx={{ marginLeft: "33%", marginTop: "-20px" }}
                  >
                    Sample Lex Bot Name here..
                  </FormHelperText>
                  <br />
                  <button
                    id="lexBtn"
                    onClick={save}
                    style={{
                      background: "#3E66FB",
                      borderRadius: "50px",
                      padding: "12px",
                      fontFamily: "Roboto",
                      color: "white",
                    }}
                  >
                    &nbsp;+&nbsp; ADD LEX
                  </button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <input type="checkbox" id="check5" />{" "}
              <label className="chat-btn5" htmlFor="check5">
                {" "}
                <i className="fa fa-file-text" />{" "}
              </label>
              <div className="wrapper5">
           
                <div className="chat-form5">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={picDef}
                      alt="Description Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ marginTop: "-8%" }}>
                      <b>AWS Lex</b>
                      </h5>
                      <p className="card-text">
                      Integrate Amazong Lex bots into your contact flows to take
                      advantage of the same speech recognition and natural
                      language understanding technology that powers Alexa. By
                      adding Lex bots, you are granting Amazon Connect
                      permission to interact with them.
                      </p>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
          
          
      
        
              </div>
              <br />
            </div>
          </div>
        </Card>
      </div>
    </div>
    </Box>
    </Box>
    </>
  );
}

export default Update;
