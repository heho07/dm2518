import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import { Link } from "react-router-dom";

// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class About extends Component {
  
  constructor(props){
    super(props);
    // this.state = {
    // }
  }
  
  componentDidMount(){
    // när den skapats
  }

  handleClick(){
    console.log(ons);
    ons.notification.alert('About!');
  }

  render() {
       
    return (
        <Ons.Page>
            <Ons.Card >
              <h1>About</h1>
              <p>This app is made for the course DM2518 at KTH. </p>
              <h3><b>Authors</b></h3>
              <p>Herman Högman Ording</p>
              <p>Mikael Forsmark</p>
            </Ons.Card>
          </Ons.Page>
      );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default About;
