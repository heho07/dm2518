import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import keys from "./keys";
 
import Send from "./Send";
import Receive from "./Receive";

import * as Ons from "react-onsenui"; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from "onsenui"; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orientation: "funkar inte om detta är kvar",
          messages:[],

          messagesToDisplay:[],
        };
        this.pubnub = new PubNubReact({
            publishKey: keys.publish,
            subscribeKey: keys.subscribe
        });
        this.pubnub.init(this);
        window.addEventListener('deviceorientation', function(event) {
          console.log(this);
          this.setState({
            orientation:event.alpha,
          });
        }.bind(this));
    }
 
    componentWillMount() {
      console.log(keys);
        this.pubnub.subscribe({
            channels: ['channel1'],
            withPresence: true
        });
        let z = this.state.orientation;
        this.pubnub.getMessage('channel1', (msg) => {
            console.log(msg);
            this.state.messages.push(msg);
            
            if (msg.message.direction === this.getDirectionOfDevice() && msg.message.direction !== "Unknown") {
              this.state.messagesToDisplay.push(msg);
            }
            else{
              console.log("unknown direction :/");
            }
        });
 
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['channel1']
        });
    }

    getDirectionOfDevice(){
      let z = this.state.orientation;
      let direction;
      if (315<=z || z<=45){
          direction = "North";
      }
      else if ( 45<z && z<=135 ){
        direction = "East";
      }
      else if (135<z && z<=225){
        direction = "South";
      }
      else if ( 225<z && z <315){
        direction = "West";
      }
      else{
        console.log("default i switch case: z är " + z);
        direction = "Unknown";
      }
      return direction;
    }

 
    send(msg){
        console.log(msg);
        let direction = this.getDirectionOfDevice();
        this.pubnub.publish({
          message: {
            content:msg,
            direction:direction,
          },
          channel: 'channel1',          
        });
        console.log(this.state.messages);
    }



    render() {
        // const messages = this.pubnub.getMessage('channel1');

        return (
            
          <Ons.Page>
            <Ons.Tabbar
              onPreChange={({ index }) => this.setState({ index: index })}
              onPostChange={() => console.log("postChange")}
              onReactive={() => console.log("postChange")}
              position="bottom"
              index={this.state.index}
              renderTabs={(activeIndex, tabbar) => [
                {
                  content: (
                    <Ons.Page key="Send">
                     <Send 
                      onSend = {(msg) => this.send(msg)} 
                      getDirectionOfDevice = {() => this.getDirectionOfDevice()}
                    />
                    
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Send" icon="fa-volume-up" key="SendTab" />
                },
                {
                  content: (
                    <Ons.Page key="Receive">
                      <Receive 
                        messages = { 
                          (this.getDirectionOfDevice() === "Unknown") ?
                            this.state.messages : this.state.messagesToDisplay
                          } 
                        orientation = {this.state.orientation} 
                        getDirectionOfDevice = {() => this.getDirectionOfDevice()}
                        />
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Receive" icon="fa-eye" key="ReceiveTab" />
                }
              ]}
            />
        </Ons.Page>
        );
    }
}
                
// initializes the geolocated thing and sets Homescreen aas it's child
export default Homescreen;