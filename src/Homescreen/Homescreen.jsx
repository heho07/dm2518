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

export default class Homescreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orientation: "funkar inte om detta är kvar",
          messages:[],
          messagesQ1:[],
          messagesQ2:[],
          messagesQ3:[],
          messagesQ4:[],
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
            if (msg.message.biggerLat && msg.message.biggerLong) {
              this.state.messagesQ1.push(msg);
            }
            else if (!msg.message.biggerLat && msg.message.biggerLong){
              this.state.messagesQ2.push(msg);
            }
            else if (!msg.message.biggerLat && !msg.message.biggerLong){
              this.state.messagesQ3.push(msg);
            }
            else if (msg.message.biggerLat && !msg.message.biggerLong){
              this.state.messagesQ4.push(msg);
            }
            else{
              console.log("unknown direction :/");
            }
        });
 
        this.pubnub.getStatus((st) => {
            this.pubnub.publish({
                message: 'hello world from react',
                channel: 'channel1'
            });
        });
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['channel1']
        });
    }

    getQuadrantMessages(){
      let z = this.state.orientation;
      if (0<=z && z<=90){
        return this.state.messagesQ1;
      }
      else if ( 90<z && z<=180 ){
        return this.state.messagesQ2;
      }
      else if (180<z && z<=270){
        return this.state.messagesQ3;
      }
      else if ( 270<z && z <360){
        return this.state.messagesQ4;
      }
      else{
        return this.state.messages;
      }
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
        this.pubnub.publish({
          message: {
            content:msg,
            biggerLat:biggerLat,
            biggerLong:biggerLong,
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
                    <Ons.Page key="Feed">
                     <Send onSend = {(msg) => this.send(msg)} />
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Feed" icon="fa-headphones" key="FeedTab" />
                },
                {
                  content: (
                    <Ons.Page key="Upload">
                      <Receive 
                        messages = {this.getQuadrantMessages()} 
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
                      // <p>{this.state.orientation}</p>
                      //   <ul>
                      //       {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                      //   </ul>
