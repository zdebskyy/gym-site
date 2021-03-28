import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import css from "./ScheduleMap.module.css";

const googleMapsApiKey = "AIzaSyA0C9IRhYtv95emD4pNB_X3X3J629nXYt0";

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

class ScheduleMap extends Component {
  state = {
    center: this.props.center,
    marker: this.props.marker,
  };

  componentDidUpdate(prevProps, prevState) {
    const { center, marker } = this.props;

    if (prevProps.center !== center) {
      this.setState({ center, marker });
    }
  }

  render() {
    const { google } = this.props;
    const { center, marker } = this.state;

    return (
      <div className={css.mapWrapper}>
        <Map
          google={google}
          zoom={14.5}
          style={mapStyles}
          containerStyle={containerStyle}
          initialCenter={center}
          center={center}
        >
          {marker.map((el) => (
            <Marker position={el} key={el.lat} />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey,
})(ScheduleMap);
