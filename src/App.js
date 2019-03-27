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
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Homescreen} />
          <Route path = {process.env.PUBLIC_URL+"/Karta"} render = {() => <Karta/>}/>
          <p>test</p>
          
        </header>
      </div>
    );
  }
}

export default App;
