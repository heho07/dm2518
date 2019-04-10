import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./Homescreen.css";

// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Homescreen extends Component {
    
	handleClick(newUrl){
		//ons.notification.alert('clicked');
    this.props.history.push('/'+newUrl);
	}

  render() {
//<h1>Welcome to The Map App!</h1>
  //      <h3>Click on the map below to start the experience&trade;</h3>
    //    <Link to = "/Yoga"><img src={require("../images/favicon.png")}/></Link>
    let data = ["Yoga", "Meditation", "Breathing", "About"];
    return (
    <Ons.Page modifier="appbcg">
      <div><h1>Relaxation WOOOO</h1></div>
  		<Ons.List
       		dataSource= {data}
      		renderRow = {(row, idx) => (
        			<Ons.ListItem onClick = {() => this.handleClick(row)} key = {row}> 
                <div className="left" style={{color: "#45a2fb"}}> {row} </div>
                <div className="right" style={{color: "#45a2fb"}}><i className="fa fa-arrow-right"></i></div> 
              </Ons.ListItem>
  			)}
    		/>	
          
      </Ons.Page>
    );
  }
}

export default Homescreen;
