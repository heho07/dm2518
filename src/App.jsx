import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Yoga from "./Yoga/Yoga";
import Meditation from "./Meditation/Meditation";
import Breathing from "./Breathing/Breathing";
import About from "./About/About";
import Homescreen from "./Homescreen/Homescreen";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Homescreen} />
          <Route path = "/Yoga" render = {() => <Yoga/>}/>          
          <Route path = "/Meditation" render = {() => <Meditation/>}/>
          <Route path = "/Breathing" render = {() => <Breathing/>}/>
          <Route path = "/About" render = {() => <About/>}/>
        </header>
      </div>
    );
  }
}

export default App;
