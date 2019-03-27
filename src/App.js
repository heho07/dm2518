import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Karta from "./Karta/Karta";
import Homescreen from "./Homescreen/Homescreen";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Homescreen} />
          <Route path = "/Karta" render = {() => <Karta/>}/>
          
        </header>
      </div>
    );
  }
}

export default App;
