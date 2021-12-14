import React from "react";
import { useState ,useEffect} from "react"; //HERE we imporgitt useState Hook so we can add state to our functional components.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import FormHelperText from '@mui/material/FormHelperText';
import swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory } from "react-router";
import create1 from "./../Assets/create.png";
import update from "./../Assets/update.png"
import createImage from "./../Assets/createImage.png"
import xImage from "./../Assets/xx.png";
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

  



function Create() {
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


  let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

  if(localStorage.getItem("onSuccess")==null){
     history.push("/")

  }




  const [InstanceAlias, setInstanceAlias] = useState("");

  const [IdentityManagementType, setIdentityManagementType] = useState("");
   


  const isLoaded = [true];
  useEffect(() => {
      document.getElementById("CreateIntanceButton").disabled = true;
  



  }, isLoaded);



  function InstanceAliasFunc() {


      if (InstanceAlias !== "") {
          document.getElementById("CreateIntanceButton").disabled = false;

      }
      else {
          document.getElementById("CreateIntanceButton").disabled = true;


      }
  }

  
  const create = () => {

    
 
  


    if (InstanceAlias !== "" && IdentityManagementType !== "") {
      var data = {InstanceAlias};

      const params = new URLSearchParams({
        IdentityManagementType: IdentityManagementType,
      }).toString();

      const url =
        "https://awscap-connect-restapi.acn-atcp.com/createinstance?" + params;

      Axios.post(url, data, {

      })

      .then((res) => {

        if (res.data.includes("already used")) {
         
    swal.fire({
      html: `
          
          
          <div class="card">
          <div class="card-header" style="background-color:#ff5148">
          <br>
         
          <h5 class="card-title"  style="float:left;font-family: Arial;font-size: 2.1rem;color:white ">Instance alias </h5> 
          <br>
          <h5  style="float:left;font-family: Arial;font-size: 2.1rem;color:white  ">is already used!</h5> 
          <br>
          <img src =${xImage} style="margin-right: -8%;height: 50%;width: 43%;margin-bottom: -9px;"></img>


          </div>
          <div class="card-body">
         <br>
            <p class="card-text"style="font-family: 'Roboto', sans-serif;font-size: 13px;float: left;" >You can create another Instance!</p>
          </div>



        </div>

        
        `,
        showCancelButton: true,
                cancelButtonColor: "white",
                confirmButtonColor: "white",
              
                confirmButtonText: `<p style="color:blue;font-family: 'Roboto', sans-serif"><b>Proceed, Update Instance</b></p>`,
          
                cancelButtonText: `<p style="color:black;font-family: 'Roboto', sans-serif"><b>OK</b></p>`,
                reverseButtons: true
          
              })
                .then((result) => {
                  if (result.isConfirmed) {
                    localStorage.setItem("createdInstance", "next step");
                     history.push("/updateInstance");

                  } else {
                 
                  }
                });

        } else if (res.data.includes("successfully created")) {
          const response = res.data.split("*");
          const getInstanceIDOnly = response[1];

          swal.fire({
            html: `
                
                
                <div class="card">
                <div class="card-header" style="background-color:#27AE60">
                <br>
               
                <h5 class="card-title"  style="float:left;font-family: Arial;font-size: 2.1rem;color:white ">Successfully</h5> 
                <br>
                <h5  style="float:left;font-family: Arial;font-size: 2.1rem;color:white  ">created instance</h5> 
                <br>
                <img src =${createImage} style="margin-right: -6%;height: 50%;width: 43%;margin-bottom: -9px;"></img>
      
      
                </div>
                <div class="card-body">
               <p style="font-family: 'Roboto', sans-serif;font-size: 13px;float: left;">Instance ID: <b>${getInstanceIDOnly}</b></p>
               <br>
                  <p class="card-text"style="font-family: 'Roboto', sans-serif;font-size: 13px;float: left;" >Do you want to proceed updating this instance?</p>
                </div>
      
      
      
              </div>
      
              
              `,
            type: "success",
            showCancelButton: true,
            cancelButtonColor: "white",
            confirmButtonColor: "white",
          
            confirmButtonText: `<p style="color:blue;font-family: 'Roboto', sans-serif"><b>YES, UPDATE INSTANCE</b></p>`,
      
            cancelButtonText: `<p style="color:black;font-family: 'Roboto', sans-serif"><b>NO, DON'T UPDATE</b></p>`,
            reverseButtons: true
      
          })
            .then((result) => {
              if (result.isConfirmed) {
                localStorage.setItem("createdInstance", "next step");
                 history.push("/updateInstance");

              } else {
               
              }
            });
        } else if (res.data.includes("Quota limit reached")) {
          const title = `<b style="color: white; font-family: Graphik"> Limit reached. </b>`;
          const okay = '<b style="color: white;">Okay</b>';
    swal.fire({
      html: `
          
          
          <div class="card">
          <div class="card-header" style="background-color:#ff5148">
          <br>
         
          <h5 class="card-title"  style="float:left;font-family: Arial;font-size: 2.1rem;color:white ">Quota limit reached  </h5> 
          <br>
          <h5  style="float:left;font-family: Arial;font-size: 2.1rem;color:white  ">for number of</h5> 
          <br>
          <br>
          <br>
          <br>
          
          <h5  style="float:left;font-family: Arial;font-size: 2.1rem;color:white  "> instance!</h5> 
         
          <img src =${xImage} style="margin-right: -33%;height: 50%;width: 43%;margin-bottom: -9px;"></img>


          </div>
      


        </div>

        
        `,
      type: "success",
      confirmButtonColor: "white",
    
      confirmButtonText: `<p style="color:blue;font-family: 'Roboto', sans-serif"><b>OKAY</b></p>`,

      

    })
  
        }
      });
    } else {
      const text = `<b style="color: white; font-size: 13px"> All fields must not be empty! </b>`;
      const okay = '<b style="color: white;">Okay</b>';
      const title = `<b style="color: white;  font-family: Graphik"> Required </b>`;
      swal.fire({
        title: title,
        html: text,
        icon: "warning",
        confirmButtonColor: "#63b8a7",
        customClass: "Custom_Cancel",
        confirmButtonText: okay,
        background: "#ff5148",
      });
    }
  };

  const Logout =()=>{
    localStorage.removeItem("onSuccess")
    history.push("/")

  }
  
  return (
    <>
      <div style={{backgroundColor:'#ffffff'}}>
          
        <Box sx={{ display: 'flex', marginLeft: '1.5%' }}>
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
          <Drawer variant="permanent" open={open}  classes={{ paper: classes.paper }}
 >
            <DrawerHeader >

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
         
          <Box>  <br /> <br /> <br /> <br /> <div id="createC" >
          <img id="createImg" src={create1} />
          <a href='/createInstance' style={{textDecoration: 'none', color:'black'}}><span id="createInstance" style={{ fontFamily: 'Graphik', fontSize: '14px', marginLeft: '-20px', marginTop:'-5%'}}>Create<br />Instance</span></a>
          <div id="color"></div>
        </div>

        <div id="updateC">
        <img id="updateImg" src={update} />
        <a  href='/updateInstance' style={{textDecoration: 'none', color:'#B0B0B0'}}><p id="updateInstance" style={{ fontFamily: 'Graphik', marginLeft: '42px', fontSize: '14px',marginTop:'-8%'}}>Update<br /> Instance</p></a>
        </div>

        <Typography id="Typo1C" style={{
                fontFamily: 'Graphik',
                fontSize: '21px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '28px',
                letterSpacing: '0em',
                textAlign: 'left',
            }}>Create Instance</Typography>

        <hr id="dividerC" />

        <form id="createForm" >
          <div id="outlined" >
            <TextField id="outlinedF" label="Instance Name" placeholder="Enter instance alias" variant="outlined" onChange={(event) => {
              setInstanceAlias(event.target.value);
            }} onKeyUp={InstanceAliasFunc} />
            {/* <TextField id="outlinedF" label="Instance Name" placeholder="Enter instance alias" variant="outlined" onChange={(event) => {
              setInstanceAlias(event.target.value);
            }} onKeyUp={InstanceAliasFunc}><Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard-label"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select></TextField> */}
        
             {/* <FormHelperText>Put standard instance naming convention here..</FormHelperText> */}
             
          </div><FormHelperText sx={{marginLeft: '35px', marginTop: '90px'}}>Put standard instance naming convention here..</FormHelperText>
          <Typography id="Typo2" style={{ fontFamily: 'Roboto' }}>Identity Management Type</Typography>
          {/* <input
                type="text"
                className="form-control"
                id="inputInstanceName"
                onChange={(event) => {
                  setInstanceAlias(event.target.value);
                }}
              /> */}
          <br />
          <br />

         <div id="radio">
          <input
            type="radio"
            id="saml"
            name="fav_language"
            value="SAML"
            onChange={(event) => {
              setIdentityManagementType(event.target.value);
            }}
          />
          &nbsp;&nbsp;
          <label for="saml" className="saml" style={{fontFamily:"Roboto"}}>
            SAML
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            id="saml"
            name="fav_language"
            value="ACM"
            onChange={(event) => {
              setIdentityManagementType(event.target.value);
            }}
          />
          &nbsp;&nbsp;
          <label for="saml" style={{fontFamily:"Roboto"}}>Amazon Connect Manage</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            id="saml"
            name="fav_language"
            value="SAML"
            onChange={(event) => {
              setIdentityManagementType(event.target.value);
            }}
          />
          &nbsp;&nbsp;
          <label for="saml" style={{fontFamily:"Roboto"}}>Link to existing directory</label>&nbsp;&nbsp;
          </div>
          
          <button
            type="button"
            id="CreateIntanceButton"
            className="btn btn-primary custom-btn btn-3 "
            onClick={create}
            
          >
            <span style={{fontFamily:"Roboto"}}>&nbsp;+&nbsp;&nbsp;CREATE INSTANCE</span>
          </button>
        </form>
        </Box>
        </Box>
      </div>
    </>
  );
}

export default Create;
