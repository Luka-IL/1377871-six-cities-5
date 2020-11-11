import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offersSort} from "../../utils";
import {connect} from "react-redux";

const ListOffers = (props) => {

  const {offers, onOfferClick, sort} = props;
  const sortOffers = offersSort(offers, sort);

  return (
    <div className={`cities__places-list places__list tabs__content`}>
      {sortOffers.map((item, i) =>
        <OfferCard
          key={`card-${i}`}
          offer={item}
          activeClass={`cities__place-card`}
          onOfferClick={onOfferClick}
        />
      )}
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  sort: state.sort
});

export {ListOffers};
export default connect(mapStateToProps)(ListOffers);