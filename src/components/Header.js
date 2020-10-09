import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Rebecca Burch" />
      <Typography variant="h4">
        <Typed strings={["Rebecca Burch"]} typeSpeed={40} />
      </Typography>
    </Box>
  );
};

export default Header;
