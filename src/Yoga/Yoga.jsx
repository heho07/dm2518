import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import "./Yoga.css";
import { Link } from "react-router-dom";
// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Yoga extends Component {
  
  constructor(props){
    super(props);
    // this.state = {
    // }
  }
  
  componentDidMount(){
    // när den skapats
  }

  handleClick(){
    console.log(ons);
    ons.notification.alert('Hello world!');
  }

  instructions(){
    let instructions = ["Let your arms hang loose.", "Become aware of the shoulders.", "Slightly lift one shoulder and release it.", 
     "Let the shoulder come all the way down.", "Lift the other shoulder and release it.", "Alternate three more times on each side.", 
     "Experience the breath flowing in and out of the body."
    ];        
    
    return (
    <div> 
      <h1>Yoga Your Shoulders</h1>
      <ol>
        {instructions.map((item, i) =>
          <li key = {i + item}>{item}</li>
         )}
      </ol>
    </div>
    )
  }

  render() {
       
    return (
          <Ons.Page 
          renderToolbar = {() => 
            <Ons.Toolbar>
              <div className="left"><Link to = "/" ><Ons.BackButton modifier={this.props.modifier}>Back</Ons.BackButton></Link></div>
              <div className="center">Yoga</div>
            </Ons.Toolbar>
          }>
            <Ons.Card>
              <img src = {require("../images/photo-shoulders-1.jpg")} style = {{maxWidth:"100%"}}/>
              {this.instructions()}
            </Ons.Card>
          </Ons.Page>
      );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default Yoga;
