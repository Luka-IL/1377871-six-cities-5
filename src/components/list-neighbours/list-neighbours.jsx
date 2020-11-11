import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

export const ListNeighbours = (props) => {

  const {offers, onOfferClick} = props;

  return (
    <div className={`near-places__list places__list tabs__content`}>
      {offers.map((item, i) =>
        <OfferCard
          key={`card-${i}`}
          offer={item}
          activeClass={`near-places__card`}
          onOfferClick={onOfferClick}
        />
      )}
    </div>
  );
};

ListNeighbours.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

export default ListNeighbours;
