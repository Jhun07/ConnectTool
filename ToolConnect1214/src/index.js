
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, } from "react-router-dom"; //routes
import { Link } from 'react-router-dom';
import Update from "./components/UpdateInstance";
import Create from "./components/CreateInstance";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Verify from "./components/verify";
// for icons
import Acnlogo from "./Assets/acnlogo.png";
import Acntext from "./Assets/acntext.png";
import iconfig from "./Assets/instanceCon.png";
import setting from "./Assets/setting.png";
import notify from "./Assets/notify.png";
import logout from "./Assets/logout.png";
import terms from "./Assets/terms.png";

import contactFlow from "./Assets/contactFlow.png";
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
import * as React from 'react';
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

/////ENDDDD


function App() {

  return (
    <>
      <div>
            <Router>

              {/* ROUTES FOR NAVIGATION */}

              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/updateInstance" component={Update} />
              <Route exact path="/createInstance" component={Create} />
              <Route exact path="/verify" component={Verify} />
            </Router>
      </div>
    </>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);