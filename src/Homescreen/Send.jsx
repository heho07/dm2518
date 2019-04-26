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
    }

    render() {
        return (
            
          <Ons.Page>
            <button onClick = {() => this.props.onSend("hej")}>skick hej</button>
        </Ons.Page>
        );
    }
}
