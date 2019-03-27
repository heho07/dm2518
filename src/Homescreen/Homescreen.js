import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Homescreen extends Component {
    


  render() {

    return (
      <div>
        <Link to = "/Karta">Map</Link>
      </div>
    );
  }
}

export default Homescreen;
