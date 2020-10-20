import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends React.Component {
  constructor(props) {
    super(props);
    const {offers} = props;
    this.coordinates = offers.map((item) => item.coordinates);
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    const zooms = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zooms);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.coordinates.forEach((item) => {
      leaflet
      .marker(item, {icon})
      .addTo(map);
    });
  }
  render() {
    return (
      <div id="map" style={{width: 100 + `%`, height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.array.isRequired
  }))
};

export default Map;
