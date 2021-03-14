import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: 600,
  height: 400,
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

class ScheduleMap extends Component {
  render() {
    const { google, center, marker } = this.props;
    console.log("center", center);
    console.log("marker", marker);

    return (
      <div style={{ marginTop: 25 }}>
        <Map
          google={google}
          zoom={16}
          style={mapStyles}
          containerStyle={containerStyle}
          initialCenter={center}
        >
          <Marker position={marker} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA0C9IRhYtv95emD4pNB_X3X3J629nXYt0",
})(ScheduleMap);
