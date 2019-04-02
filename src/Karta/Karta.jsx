import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import {geolocated} from 'react-geolocated';
import "./Karta.css";

class Karta extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      map:null,
      markers:[],
//      isFull: false,
      controllerHeight:0,
    }
  }
  
  componentDidMount(){
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.3498092, lng: 18.0684758},
      zoom: 15,
      mapTypeId: 'hybrid',
      tilt: 45,
      disableDefaultUI: true,
      gestureHandling: 'none',
      zoomControl: false,
    });

    this.setState({map:map});
    const controllerHeight = document.getElementById("controller").clientHeight;
    this.setState({controllerHeight:controllerHeight});

  }

  zoom(number){
    console.log("empty");
    let currentZoom = this.state.map.getZoom();
    this.state.map.setZoom(currentZoom + number);
  }

  panBy(x, y){
    this.state.map.panBy(x, y);
  }

  createMarker(dragBoolean, label, coordinates){
    let marker = new window.google.maps.Marker({
      position:coordinates,
      map:this.state.map,
      draggable:dragBoolean,
      label:label,
    });
  }

  // goFull(){
  //   this.setState({ isFull: true });
  // }

  render() {
    console.log(this.props.coords);
    let hereMarker;
    console.log(this.props.isGeolocationAvailable);    
    if (this.props.isGeolocationAvailable) {
      hereMarker= (
        <button class = "btn btn-light flex-button leftButton" onClick = {() => { 
          this.createMarker(false, "currPos", {lat:this.props.coords.latitude, lng: this.props.coords.longitude});
          this.state.map.panTo({lat:this.props.coords.latitude, lng: this.props.coords.longitude});
        }}>
        Here</button>); 
    }
    else{
      hereMarker = <p>Not available</p>;
    }
       
    return (
      <div style = {{height:window.innerHeight}}>
{/*         <button class="btn btn-light" onClick={() => this.goFull()}>
          Go Fullscreen
        </button>*/}
        <div id = "locationController">
          {hereMarker}           
          <button class = "btn btn-light flex-button leftButton" onClick = {() => 
            this.createMarker(false, "KTH Library", {lat: 59.347842, lng: 18.072874})}>
            KTH Library</button> 
          <button class = "btn btn-light flex-button leftButton" onClick = {() => 
            this.createMarker(false, "META", {lat: 59.348104, lng: 18.071416})}>
            META</button> 
          <button class = "btn btn-light flex-button leftButton" onClick = {() => 
            this.createMarker(false, "Gråttan", {lat: 59.347365, lng: 18.072752})}>
            Gråttan</button> 
        </div>
        {/* the map div's height depends on the height of the controller div. Has a minimum height which can be altered below */}
        <div id="map" style={{width:window.innerWidth, height:window.innerHeight - this.state.controllerHeight, "minHeight":"15%"}}>
        
        </div>
        <div class="flex-container" id = "controller">
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
    );
  }
}

// initializes the geolocated thing and sets Karta aas it's child
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Karta);
