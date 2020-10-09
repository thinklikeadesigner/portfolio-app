import React from "react";
import "./App.css";
import Home from "./components/";
import {Route} from "react-router-dom";
import Resume from "./components/Resume";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
     <Route exact path="/" component={Home} />
     <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    return <div ref={this.wrapper}>{this.props.children}</div>;
  }
}