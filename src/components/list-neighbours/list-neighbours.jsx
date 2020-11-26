import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

export const ListNeighbours = (props) => {

  const {neighbourhoods, onOfferClick} = props;

  return (
    <div className={`near-places__list places__list tabs__content`}>
      {neighbourhoods.map((item, i) =>
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
  neighbourhoods: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

export default ListNeighbours;
