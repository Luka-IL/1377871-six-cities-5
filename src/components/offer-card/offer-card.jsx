import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import withFavoriteButton from "../../hocs/with-favorite-button/with-favorite-button";
import FavoriteButtonComponent from "../favorite-button-offer-card/favorite-button-offer-card";
import {AppRoute} from "../../const";
import {PropTypesOffer} from "../../proptypes";

const OfferCard = (props) => {
  const FavoriteButton = withFavoriteButton(FavoriteButtonComponent);

  const {offer, onOfferClick, activateOffer, activeClass, activeOffer} = props;
  const {price, title, rating, type, premium, image, id, favorite} = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    activateOffer(offer);
    onOfferClick(`${AppRoute.OFFER}/${id}`);
  };
  const onMouseOut = (evt) => {
    evt.preventDefault();
    activateOffer({});
  };
  const onMouseOver = (evt) => {
    evt.preventDefault();
    activateOffer(offer);
  };

  return (
    <article className={`${activeClass} place-card`}
      onMouseOut={activeOffer ? onMouseOut : () => {}}
      onMouseOver={activeOffer ? onMouseOver : () => {}}>
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="place-card__image-wrapper"
        onClick={onClick}>
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            favorite={favorite}
            id={id}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (20 * Math.round(rating)) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name"
          onClick={onClick}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypesOffer,
  authorizationStatus: PropTypes.string.isRequired,
  activeOffer: PropTypes.bool.isRequired,
  activateOffer: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  activateOffer(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
