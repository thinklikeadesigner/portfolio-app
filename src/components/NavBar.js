import React, {useState} from "react";
import MobileRightMenuSlide from "@material-ui/core/Drawer";

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
import { makeStyles } from "@material-ui/core/styles";

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
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
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
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={lsItem.listText}></ListItemText>
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
            </MobileRightMenuSlide>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
