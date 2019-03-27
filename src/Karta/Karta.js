import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import "./Karta.css";

class Karta extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      map:null,
      markers:[],
      isFull: false,
    }
  }
  
  componentDidMount(){
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.3498092, lng: 18.0684758},
      zoom: 15,
      mapTypeId: 'hybrid',
      tilt: 45,
      gestureHandling: 'none',
      zoomControl: false
    });
    this.setState({map:map});

  }

  zoom(number){
    console.log("empty");
    let currentZoom = this.state.map.getZoom();
    this.state.map.setZoom(currentZoom + number);
  }

  panBy(x, y){
    this.state.map.panBy(x, y);
  }

  createMarker(dragBoolean){
    let marker = new window.google.maps.Marker({
      position:this.state.map.getCenter(),
      map:this.state.map,
      draggable:dragBoolean,
    });
  }

  goFull(){
    this.setState({ isFull: true });
  }

  render() {

    return (
      <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
      <div>
        <button class="btn btn-light" onClick={() => this.goFull()}>
          Go Fullscreen
        </button>
        <div id="map" style={{width:window.innerWidth-100, height:window.innerHeight-200}}>
        </div>
        <div class="flex-container">
          <button class="btn btn-light flex-button" onClick = {() => this.zoom(1)}><i className="fa fa-plus"></i></button>
          <button class="btn btn-light flex-button" onClick = {() => this.zoom(-1)}><i className="fa fa-minus"></i></button>
          <hr/>
          <button class="btn btn-light flex-button" onClick = {() => this.panBy(0, -50)}><i className="fa fa-arrow-up"></i></button>
          <hr/>            
          <button class="btn btn-light flex-button" onClick = {() => this.panBy(-50, 0)}><i className="fa fa-arrow-left"></i></button>
          <button class="btn btn-light flex-button" onClick = {() => this.panBy(50, 0)}><i className="fa fa-arrow-right"></i></button> 
          <hr/>           
          <button class="btn btn-light flex-button" onClick = {() => this.panBy(0, 50)}><i className="fa fa-arrow-down"></i></button>
          <hr/>
          <button class="btn btn-light flex-button" onClick = {() => this.createMarker(true)}>Draggable marker</button>
          <button class="btn btn-light flex-button" onClick = {() => this.createMarker(false)}>Undraggable marker</button>
        </div>
      </div>
      </Fullscreen>
    );
  }
}

export default Karta;
