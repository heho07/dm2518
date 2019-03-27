import React, { Component } from 'react';


class Karta extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      map:null,
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

  render() {

    return (
      <div>
        <div id="map" style={{width:500, height:500}}>
        </div>
        <button onClick = {() => this.zoom(1)}><i class="fa fa-plus"></i></button>
        <button onClick = {() => this.zoom(-1)}><i class="fa fa-minus"></i></button>
        <p>{this.state.test}</p>
      </div>
    );
  }
}

export default Karta;
