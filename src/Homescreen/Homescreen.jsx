import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import keys from "./keys";
 
import Send from "./Send";
import Receive from "./Receive";

import {geolocated} from 'react-geolocated';
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
          messagesQ1:[],
          messagesQ2:[],
          messagesQ3:[],
          messagesQ4:[],
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
 
        this.pubnub.getMessage('channel1', (msg) => {
            console.log(msg);
            this.state.messages.push(msg);
            if(!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled){
              console.log("Enable geolocation!");
              return
            }
            let coords = this.props.coords;
            let lat = coords.latitude;
            let long = coords.longitude;
            if (lat === null || long === null) {
              return
            }
            if (msg.message.biggerLat && msg.message.biggerLong) {
              if (lat >= msg.message.coords.lat && long >= msg.message.coords.long) {
                this.state.messagesToDisplay.push(msg);
              }
            }
            else if (!msg.message.biggerLat && msg.message.biggerLong){
              if (lat < msg.message.coords.lat && long >= msg.message.coords.long) {
                this.state.messagesToDisplay.push(msg);
              }
            }
            else if (!msg.message.biggerLat && !msg.message.biggerLong){
              if (lat < msg.message.coords.lat && long < msg.message.coords.long) {
                this.state.messagesToDisplay.push(msg);
              }
            }
            else if (msg.message.biggerLat && !msg.message.biggerLong){
              if (lat >= msg.message.coords.lat && long < msg.message.coords.long) {
                this.state.messagesToDisplay.push(msg);
              }
            }
            else{
              console.log("unknown direction :/");
            }
        });
 
        // this.pubnub.getStatus((st) => {
        //     this.pubnub.publish({
        //         message: 'hello world from react',
        //         channel: 'channel1'
        //     });
        // });
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['channel1']
        });
    }

 
    send(msg){
        let z = this.state.orientation;
        console.log(z);
        let biggerLat, biggerLong;
        
        if (0<=z && z<=90){
          biggerLat = true;
          biggerLong = true;
        }
        else if ( 90<z && z<=180 ){
          biggerLat = false;
          biggerLong = true;
        }
        else if (180<z && z<=270){
          biggerLat = false;
          biggerLong = false;
        }
        else if ( 270<z && z <360){
          biggerLat = true;
          biggerLong = false;
        }
        else{
          console.log("default i switch case: z är " + z);
          biggerLat = null;
          biggerLong = null;
          
        }
        console.log(z);
        console.log(biggerLong);
        let coords;
        if(!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled){
          coords = {
            lat:null,
            long:null,
          }
          console.log(this.props.coords);
        }
        else{
          coords = {
            lat: this.props.coords.latitude,
            long: this.props.coords.longitude,
          }
        }
        this.pubnub.publish({
          message: {
            content:msg,
            biggerLat:biggerLat,
            biggerLong:biggerLong,
            coords:coords,
          },
          channel: 'channel1',          
        });
        console.log(this.state.messages);
    }

    showCoords(){
      console.log(this.props.coords);
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
                    <Ons.Page key="Feed">
                     <Send onSend = {(msg) => this.send(msg)} showCoords = {() => this.showCoords()}/>
                    
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Feed" icon="fa-headphones" key="FeedTab" />
                },
                {
                  content: (
                    <Ons.Page key="Upload">
                      <Receive 
                        messages = { 
                          (!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled) ?
                            this.state.messages : this.state.messagesToDisplay
                        } 
                        orientation = {this.state.orientation} />
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Upload" icon="fa-microphone" key="UploadTab" />
                }
              ]}
            />
        </Ons.Page>
        );
    }
}
                
// initializes the geolocated thing and sets Homescreen aas it's child
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Homescreen);