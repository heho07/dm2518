import React, { Component } from 'react';
import "./Karta.css";

class Karta extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      map:null,
      markers:[],
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

  createMarker(){
    let marker = new window.google.maps.Marker({
      position:this.state.map.getCenter(),
      map:this.state.map,
      draggable:true,
    });
  }

  render() {

    return (
      <div>
        <div id="map" style={{width:window.innerWidth-20, height:window.innerHeight - 100}}>
        </div>
        <div className="row">
          <div className="col-sm-1" id="inner">
            <button onClick = {() => this.zoom(1)}><i className="fa fa-plus"></i></button>
          </div>
          <div className="col-sm-1" id="inner">
            <button onClick = {() => this.zoom(-1)}><i className="fa fa-minus"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="">
            <button onClick = {() => this.panBy(0, -50)}><i className="fa fa-arrow-up"></i></button>
          </div>
        </div>
        <div className="row">
          <button onClick = {() => this.panBy(-50, 0)}><i className="fa fa-arrow-left"></i></button>
          <button onClick = {() => this.panBy(50, 0)}><i className="fa fa-arrow-right"></i></button>
        </div>
        <div className="row">
          <button onClick = {() => this.panBy(0, 50)}><i className="fa fa-arrow-down"></i></button>
        </div>
        <button onClick = {() => this.createMarker()}>marker</button>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default Karta;
