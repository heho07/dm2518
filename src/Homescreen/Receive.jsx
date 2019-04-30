import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import keys from "./keys";
 
import * as Ons from "react-onsenui"; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from "onsenui"; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

export default class Receive extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
          <Ons.Page>
            <center>
                <p>Receiving messages from the</p>
                <h1 style = {{fontFamily:"Lucida Sans Typewriter, American Typewriter"}}>{this.props.getDirectionOfDevice()}</h1>
                <hr/>
            </center>
            <ul>
                {this.props.messages.map((m, index) => <li key={'message' + index}><b>{m.message.direction}</b> {": " +m.message.content }</li>)}
            </ul>
        </Ons.Page>
        );
    }
}
