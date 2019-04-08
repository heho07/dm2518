import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import { Link } from "react-router-dom";
// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Meditation extends Component {
  
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
    let instructions = ["Stand on your feet.", "Experience the contact with the ground.", "Feel into the soles of the feet.", 
    "Feel the knees.", "The hips.", "The spine.", "Shoulders.", "Neck.", "Head.", "Feel the connection between the top of the head and the feet."];        
    
    return (
    <div> 
      <h1>Feel Your Feet</h1>
      <Ons.List 
        dataSource = {instructions}
        renderRow = {(row, idx) => (
          <Ons.ListItem key = {row}>
            {row}
          </Ons.ListItem>
          )
        }
        renderFooter = {this.renderFooter}
        >
      </Ons.List>
    </div>
    )
  }

  render() {
       
    return (
          <Ons.Page 
          renderToolbar = {() => 
            <Ons.Toolbar>
              <div className="left"><Link to = "/" ><Ons.BackButton modifier={this.props.modifier}>Back</Ons.BackButton></Link></div>
              <div className="center">{this.props.title}</div>
            </Ons.Toolbar>
          }>
            <Ons.Card>
              <img src = "../images/photo-feet.jpg"/>
              {this.instructions()}
            </Ons.Card>
          </Ons.Page>
      );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default Meditation;
