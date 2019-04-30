import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import keys from "./keys";
 
import * as Ons from "react-onsenui"; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from "onsenui"; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

export default class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
    }


    render() {
        return (
            
          <Ons.Page>
              <center>
                <p>Sending messages to the</p>
                <h1 style = {{fontFamily:"Lucida Sans Typewriter, American Typewriter"}} >{this.props.getDirectionOfDevice()}</h1>
                <hr/>
                <form onSubmit = {(event) =>{
                    event.preventDefault();
                    this.props.onSend(this.state.text);
                }} >
                    <Ons.Input
                        style = {{fontFamily:"Lucida Sans Typewriter, American Typewriter"}}
                        value = {this.state.text}
                        onChange = {(event) => { this.setState({text: event.target.value})} }
                        modifier= 'material'
                        placeholder= 'Write your message here!'
                    />
                </form>
                <Ons.Button onClick = {() => this.props.onSend(this.state.text)} style = {{backgroundColor:"black", marginTop:"1em"}}>Send message!</Ons.Button>
            </center>
        </Ons.Page>
        );
    }
}
