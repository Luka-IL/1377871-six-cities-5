import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {PropTypesOffer} from "../../proptypes";

export const ListNeighbours = (props) => {

  const {neighborhoods, onOfferClick} = props;

  return (
    <div className={`near-places__list places__list tabs__content`}>
      {neighborhoods.map((item, i) =>
        <OfferCard
          key={`card-${i}`}
          offer={item}
          activeClass={`near-places__card`}
          onOfferClick={onOfferClick}
          activeOffer={false}
        />
      )}
    </div>
  );
};

ListNeighbours.propTypes = {
  neighborhoods: PropTypes.arrayOf(PropTypesOffer),
  onOfferClick: PropTypes.func.isRequired,
};

export default ListNeighbours;
