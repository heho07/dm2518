import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import "./Yoga.css";

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
//    Ons.notification.alert('Hello world!');
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
