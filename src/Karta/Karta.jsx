import React, { Component } from 'react';
import Fullscreen from "react-full-screen";

import "./Karta.css";

class Karta extends Component {
    
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
export default Karta;
