import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };
  }

  render() {
    const {offers, onOfferClick, activeClass} = this.props;

    return (
      <div className={`${activeClass} places__list tabs__content`}>
        {offers.map((item, i) =>
          <OfferCard
            key={`card-${i}`}
            offer={item}
            activeClass={activeClass}
            onOfferClick={onOfferClick}
            onHoverOffer={(offer) => {
              this.setState({
                active: offer
              });
            }}
          />
        )}
      </div>
    );
  }
}

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired
};

export default ListOffers;
