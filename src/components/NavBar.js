import React, {useState} from "react";
import {Link} from "react-router-dom";
import MobileRightMenuSlide from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Block,
} from "@material-ui/icons";


import avatar from "../avatar.png";

//CSS styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },

  listItem: {
    color: "tan",
  },
  listText: "tan"
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
  },
];

const NavBar = () => {
const [state, setstate] = useState({
    right: false
})

const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open })
}
  const classes = useStyles();
const sideList = slider => (

      <Box className={classes.menuSliderContainer} component="div"
      onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Rebecca Burch " />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath} >
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText style={{ color: "tan" }} primary={lsItem.listText}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

)

  return (
    <>

      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)} >
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlide anchor="right" onClose={toggleSlider("right", false)} open={state.right}>
{sideList("right")}
<Footer />
            </MobileRightMenuSlide>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
