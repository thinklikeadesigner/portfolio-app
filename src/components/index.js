import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva:{
        position: "absolute"
    }
})


const Home = () => {

    const classes = useStyles()

    return (
        <div>
           <NavBar></NavBar>
           <Header/>
            <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number: {
                        value: 45,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                    }
                }
            }} >

            </Particles>
        </div>
    )
}

export default Home
