import React from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {connect} from "react-redux";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.city = [52.38333, 4.9];
    this.zooms = 12;
    this.icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [40, 40]
    });

    this.createMap = this.createMap.bind(this);
  }

  createMap() {
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
    this.updateLayer();
  }

  updateLayer() {
    const {offers, active} = this.props;
    this.coordinates = offers.map((item) => [item.location.latitude, item.location.longitude]);
    this.markers = leaflet.layerGroup();


    if (active.location) {
      const activeCoordinates = [active.location.latitude, active.location.longitude];

      this.coordinates = this.coordinates.filter((item) => item.toString() !== activeCoordinates.toString());

      const activeMarker = leaflet
        .marker(activeCoordinates, {icon: this.activeIcon});
      this.markers.addLayer(activeMarker);
    }

    this.coordinates.forEach((item) => {
      const marker = leaflet
      .marker(item, {icon: this.icon});
      this.markers.addLayer(marker);
    });

    this.map.addLayer(this.markers);
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    this.map.removeLayer(this.markers);
    this.updateLayer();
  }

  render() {
    return (
      <div id="map" style={{width: 100 + `%`, height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  active: PropTypes.object.isRequired
};

const mapStateToProps = ({DATA, STATE}) => ({
  active: STATE.active,
  offers: DATA.offers
});

export {Map};
export default connect(mapStateToProps)(Map);
