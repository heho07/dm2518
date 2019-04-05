import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import "./Yoga.css";
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Yoga extends Component {
  
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
    ons.notification.alert('Hello world!');
  }

  render() {
       
    return (
          <Ons.Page>
            <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
          </Ons.Page>
      );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default Yoga;
