import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
class Homescreen extends Component {
    


  render() {

    return (
      <div>
        <Link to = "/Karta">Map</Link>
        <p>test</p>
      </div>
    );
  }
}

export default Homescreen;
