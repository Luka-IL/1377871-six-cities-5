import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.city = [52.38333, 4.9];
    this.zooms = 12;

    this.createMap = this.createMap.bind(this);
  }

  createMap() {
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    const {offers} = this.props;
    this.coordinates = offers.map((item) => item.coordinates);
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zooms,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zooms);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.coordinates.forEach((item) => {
      leaflet
      .marker(item, {icon})
      .addTo(this.map);
    });
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.createMap();
  }

  render() {
    return (
      <div id="map" style={{width: 100 + `%`, height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired
};

export default Map;
