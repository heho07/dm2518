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
          orientation: "funkar inte om detta är kvar",
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
          // console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
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
 
    testSend(){

        this.pubnub.publish({
          message: "test",
          channel: 'channel1'
        });
        console.log(window.DeviceOrientationEvent);
    }


    render() {
        const messages = this.pubnub.getMessage('channel1');

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
                     <div>
                        <button onClick = {() => this.testSend()}>test send</button>
                        <p>{this.state.orientation}</p>
                        <ul>
                            {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                        </ul>
                    </div>
                    </Ons.Page>
                  ),
                  tab: <Ons.Tab label="Feed" icon="fa-headphones" key="FeedTab" />
                },
                {
                  content: (
                    <Ons.Page key="Upload">
                      <p>upload</p>
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
