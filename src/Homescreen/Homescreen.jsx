import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./Homescreen.css";


import Yoga from "../Yoga/Yoga";
import Meditation from "../Meditation/Meditation";
import Breathing from "../Breathing/Breathing";
import About from "../About/About";


// imports for OnsenUI
import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
import * as ons from 'onsenui'; // This needs to be imported to bootstrap the components.
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class Homescreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      index:0,
    }
  }
    

  render() {
    let data = ["Yoga", "Meditation", "Breathing", "About"];


    // Ons.Tabbar skapar tabbaren där nere
    // det man matar in är vad som ska visas på varje tab genom "content".
    // där lägger man helt enkelt in sitt element
    // Ons.Tab är den ruta som man kan klicka på i tabbar där nere och "label" är vad som ska stå där.
    // TODO: snygga till och byta icon
    return (
        <Ons.Page id="background">  
          <Ons.Tabbar
            onPreChange={({index}) => this.setState({index:index})}
            onPostChange={() => console.log('postChange')}
            onReactive={() => console.log('postChange')}
            position='bottom'
            index={this.state.index}
            renderTabs={(activeIndex, tabbar) => [
              {
                content: <Ons.Page key = "About"><About/></Ons.Page> ,
                tab: <Ons.Tab label="About" icon="fa-info-circle" key = "AboutTab" />
              },
              {
                content: <Ons.Page key = "Yoga"><Yoga/></Ons.Page>,
                tab: <Ons.Tab label="Yoga" icon="fa-child" className = "testTab" key = "YogaTab"/>
              },
              {
                content: <Ons.Page  key = "Breathing"><Breathing/></Ons.Page>,
                tab: <Ons.Tab label="Breathing" icon="fa-grin" key = "BreathingTab" />
              },
              {
                content: <Ons.Page  key = "Meditation"><Meditation/></Ons.Page>,
                tab: <Ons.Tab label="Meditation" icon="fa-heart" key = "MeditationTab" />
              }]
            }
          />
        </Ons.Page>
    );
  }
}

export default Homescreen;
