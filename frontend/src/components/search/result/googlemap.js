import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './style.css';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 25.0459990, lng: 121.5170410} }
        defaultZoom = { 18 }
        
      >
      {<Marker position={{ lat: 25.0459990, lng: 121.5170410}} />}
      </GoogleMap>
   ));
   return(
      <div className="wrap-googlemap">
        <GoogleMapExample
          containerElement={ <div style={{ display:'block',position:'relative', height: `100%`, width: '100%',marginTop:'0.4%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
      );
    }
 };
 export default Map;

