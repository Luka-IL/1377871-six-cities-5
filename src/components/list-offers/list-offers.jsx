import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offersSort} from "../../utils";
import {connect} from "react-redux";
import {getOffersInCity} from "../../utils";
import {PropTypesOffer} from "../../proptypes";


const ListOffers = (props) => {

  const {offers, onOfferClick, sort, city} = props;
  const offersInCity = getOffersInCity(offers, city);
  const sortOffers = offersSort(offersInCity, sort);

  return (
    <div className={`cities__places-list places__list tabs__content`}>
      {sortOffers.map((item, i) =>
        <OfferCard
          key={`card-${i}`}
          offer={item}
          activeClass={`cities__place-card`}
          onOfferClick={onOfferClick}
          activeOffer={true}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(PropTypesOffer),
  onOfferClick: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, STATE}) => ({
  offers: DATA.offers,
  sort: STATE.sort,
  city: DATA.city
});


export {ListOffers};
export default connect(mapStateToProps)(ListOffers);
