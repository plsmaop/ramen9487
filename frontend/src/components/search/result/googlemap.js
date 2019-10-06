import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './style.css';

class Map extends Component {
  constructor(props){
    super(props)

  }

   render() {
     console.log(parseFloat(this.props.lan))
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lan)} }
        defaultZoom = { 18 }
        
      >
      {<Marker position={{ lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lan)}} />}
      </GoogleMap>
   ));
   return(
      <div className="wrap-googlemap">
        <GoogleMapExample
          containerElement={ <div style={{ display:'block',position:'relative', height: `97%`, width: '99%',marginTop:'1%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
      );
    }
 };
 export default Map;

