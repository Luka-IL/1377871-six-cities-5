import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {getOffersInCity} from "../../utils";
import {PropTypesOffer} from "../../proptypes";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.cityCoordinates = [52.38333, 4.9];
    this.zooms = 12;
    this.icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this.activeIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this.createMap = this.createMap.bind(this);
  }

  componentDidMount() {
    this.createMap();
  }

  componentDidUpdate() {
    this.map.removeLayer(this.markers);
    this.updateLayer();
  }

  createMap() {
    this.map = leaflet.map(`map`, {
      center: this.cityCoordinates,
      zoom: this.zooms,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.cityCoordinates, this.zooms);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.updateLayer();
  }

  updateLayer() {
    const {offers, active, city} = this.props;
    const offersCity = getOffersInCity(offers, city);

    this.coordinates = offersCity.map((item) => [item.location.latitude, item.location.longitude]);
    this.markers = leaflet.layerGroup();

    if (offersCity[0]) {
      const location = offersCity[0].city.location;
      const newCenter = [location.latitude, location.longitude];
      this.map.setView(newCenter, this.zooms);
    }

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

  render() {
    return (
      <div id="map" style={{height: 100 + `%`}}></div>
    );
  }
}

Map.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypesOffer),
  active: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      })
    }),
    type: PropTypes.string,
    price: PropTypes.number,
    premium: PropTypes.bool,
    favorite: PropTypes.bool,
    rating: PropTypes.number,
    title: PropTypes.string,
    images: PropTypes.array,
    image: PropTypes.string,
    bedrooms: PropTypes.number,
    guests: PropTypes.number,
    goods: PropTypes.array,
    owner: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    description: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  })
};

const mapStateToProps = ({DATA, STATE}) => ({
  active: STATE.active,
  city: DATA.city
});

export {Map};
export default connect(mapStateToProps)(Map);
