import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const OfferCard = (props) => {

  const {offer, onOfferClick, onHoverOffer, activeClass} = props;
  const {price, title, rating, type} = offer;

  const getActiveClass = (actClass) => {
    if (actClass === `cities__places-list`) {
      return `cities__place-card`;
    }
    if (actClass === `near-places__list`) {
      return `near-places__card`;
    }
    return ``;
  };

  return (
    <article className={`${getActiveClass(activeClass)} place-card`}
      onClick={(evt) => {
        evt.preventDefault();
        onOfferClick();
      }}
      onMouseOut={(evt) => {
        evt.preventDefault();
        onHoverOffer({});
      }}
      onMouseOver={(evt) => {
        evt.preventDefault();
        onHoverOffer(offer);
      }}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (20 * rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  onHoverOffer: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  active: state.active
});

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer(offer) {
    dispatch(ActionCreator.onHoverOffer(offer));
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
