import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar.js";



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: "0",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
}));


const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          Learning Experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography className={classes.timeLineYear}  variant="h2">2020</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
