import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import { Link } from "react-router-dom";
// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Breathing extends Component {
  
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
    let instructions = ["Become aware of your face.", "Feel the forehead.", "The eyebrows.", "Eyes.", "Nose.", "Nostrils.", "Air flowing through the nostrils.", 
    "Cheeks.", "Jaw.", "Lips.", "Tongue.", "Whole of the head.", "The space surrounding the head."   
    ];        
    
    return (
    <div> 
      <h1>Breathing Excercises</h1>
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
              <div className="center">Breathing</div>
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
export default Breathing;
