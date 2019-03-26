import React, { Component } from 'react';
import Karta from "./Karta/Karta";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          HELLO WORLD!
          </p>
          <Karta/>
        </header>
      </div>
    );
  }
}

export default App;
