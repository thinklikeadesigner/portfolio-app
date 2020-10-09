import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar></NavBar>
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      ></Particles>
      <Header />
    </div>
  );
};

export default Home;
