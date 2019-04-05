import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
class Homescreen extends Component {
    


  render() {

    return (
      <div>
        <h1>Welcome to The Map App!</h1>
        <h3>Click on the map below to start the experience&trade;</h3>
        <Link to = "/Yoga"><img src={require("../images/favicon.png")}/></Link>
      </div>
    );
  }
}

export default Homescreen;
