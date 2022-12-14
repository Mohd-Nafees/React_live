import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'

export class GoogleMap extends Component {
  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
        </Map>
      </div>
    )
  }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyDFxPQ-OlpBTSaUUC4je8A__cFULqbbEqw")
  })(GoogleMap)