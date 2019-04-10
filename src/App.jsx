import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Yoga from "./Yoga/Yoga";
import Meditation from "./Meditation/Meditation";
import Breathing from "./Breathing/Breathing";
import About from "./About/About";
import Homescreen from "./Homescreen/Homescreen";
// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Homescreen/>
      </div>
      );
  }
}

export default App;
