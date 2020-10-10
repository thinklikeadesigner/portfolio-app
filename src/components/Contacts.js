import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "./NavBar.js";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  return (
    <Box component="div">
      <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">hire or contact me</Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
