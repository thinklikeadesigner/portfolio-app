import React from 'react';
import {makeStyles, withStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
"& .MuiBottomNavigationAction-root": {
    minWidth: 0,
    maxWidth: 250
},
"& .MuiSvgIcon-root": {
    fill: "tan",
    "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
    }
}
    }
})

const Footer = () => {
    const classes= useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            
< BottomNavigationAction className={classes.root} style={{padding:0}} icon={<GitHubIcon />} />
< BottomNavigationAction className={classes.root} style={{padding:0}} icon={<TwitterIcon />} />
< BottomNavigationAction className={classes.root} style={{padding:0}} icon={<LinkedInIcon />} />

</BottomNavigation>

    )
}


export default Footer;