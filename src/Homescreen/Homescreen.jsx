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
    
	handleClick(newUrl){
		//ons.notification.alert('clicked');
    this.props.history.push('/'+newUrl);
	}

  render() {
//<h1>Welcome to The Map App!</h1>
  //      <h3>Click on the map below to start the experience&trade;</h3>
    //    <Link to = "/Yoga"><img src={require("../images/favicon.png")}/></Link>
    let data = ["Yoga", "Meditation", "Breathing", "About"];


    // Ons.Tabbar skapar tabbaren där nere
    // det man matar in är vad som ska visas på varje tab genom "content".
    // där lägger man helt enkelt in sitt element
    // Ons.Tab är den ruta som man kan klicka på i tabbar där nere och "label" är vad som ska stå där.
    // TODO: snygga till och byta icon
    return (
        <Ons.Page>  
          <Ons.Tabbar
            onPreChange={({index}) => this.setState({index:index})}
            onPostChange={() => console.log('postChange')}
            onReactive={() => console.log('postChange')}
            position='bottom'
            index={this.state.index}
            renderTabs={(activeIndex, tabbar) => [
              {
                content: <Ons.Page><About/></Ons.Page> ,
                tab: <Ons.Tab label="About" icon="fa-info-circle" />
              },
              {
                content: <Ons.Page><Yoga/></Ons.Page>,
                tab: <Ons.Tab label="Yoga" icon="fa-child" />
              },
              {
                content: <Ons.Page><Breathing/></Ons.Page>,
                tab: <Ons.Tab label="Breathing" icon="fa-grin" />
              },
              {
                content: <Ons.Page><Meditation/></Ons.Page>,
                tab: <Ons.Tab label="Meditation" icon="fa-heart" />
              }]
            }
          />
        </Ons.Page>
    );
  }
}

export default Homescreen;
