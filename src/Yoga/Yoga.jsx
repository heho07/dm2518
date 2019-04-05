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


  render() {
       
    return (
        <p>Detta är en subkomponent</p>
      );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default Yoga;
