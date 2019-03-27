import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Homescreen extends Component {
    


  render() {

    return (
      <div>
        <Link to = {process.env.PUBLIC_URL+"/Karta"}>Map</Link>
        <p>test</p>
      </div>
    );
  }
}

export default Homescreen;
