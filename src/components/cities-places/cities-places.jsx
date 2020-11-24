import React from "react";
import ListSort from "../list-sort/list-sort";
import ListOffers from "../list-offers/list-offers";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getOffersInCity} from "../../offers";


const CitiesPlaces = (props) => {
  const {offers, city, onOfferClick} = props;
  const offersInCity = getOffersInCity(offers, city);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersInCity.length} places to stay in {city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <ListSort/>
      </form>
      <ListOffers
        onOfferClick={onOfferClick}
      />
    </section>
  );
};

CitiesPlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  city: DATA.city,
  offers: DATA.offers,
});

export {CitiesPlaces};
export default connect(mapStateToProps)(CitiesPlaces);
