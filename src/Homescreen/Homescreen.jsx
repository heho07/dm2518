import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";

// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Homescreen extends Component {
    


  render() {

    return (
      <Ons.Page>
		<h1>Welcome to The Map App!</h1>
        <h3>Click on the map below to start the experience&trade;</h3>
        <Link to = "/Yoga"><img src={require("../images/favicon.png")}/></Link>
        
      </Ons.Page>
    );
  }
}

export default Homescreen;
