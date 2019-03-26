import React, { Component } from 'react';


class Karta extends Component {
    
  componentDidMount(){
    console.log(window.google);
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.3498092, lng: 18.0684758},
      zoom: 15,
      mapTypeId:'hybrid',
      tilt:45
    });

  }


  render() {

    return (
      <div id = "map" style = {{width:500, height:500}}>
          
          
        
      </div>
    );
  }
}

export default Karta;
