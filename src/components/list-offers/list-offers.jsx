import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offersSort} from "../../utils";

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onOfferClick, activeClass, sort} = this.props;
    const sortOffers = offersSort(offers, sort);

    return (
      <div className={`${activeClass} places__list tabs__content`}>
        {sortOffers.map((item, i) =>
          <OfferCard
            key={`card-${i}`}
            offer={item}
            activeClass={activeClass}
            onOfferClick={onOfferClick}
          />
        )}
      </div>
    );
  }
}

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default ListOffers;
