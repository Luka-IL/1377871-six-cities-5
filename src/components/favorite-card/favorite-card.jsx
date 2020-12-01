import React from "react";
import PropTypes from "prop-types";
import withFavoriteButton from "../../hocs/with-favorite-button/with-favorite-button";
import FavoriteButtonComponent from "../favorite-button-offer-card/favorite-button-offer-card";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {PropTypesOffer} from "../../proptypes";

const FavoriteButton = withFavoriteButton(FavoriteButtonComponent);

const FavoriteCard = (props) => {

  const {offer, onOfferClick, changeCity, activateOffer, redirectMain} = props;
  const {id, city, price, image, rating, type, title, favorite} = offer;

  const onOfferCardClick = (evt) => {
    evt.preventDefault();
    changeCity(city.name);
    activateOffer(offer);
    onOfferClick(`${AppRoute.OFFER}/${id}`);
  };

  const redirectToMainCity = (evt) => {
    evt.preventDefault();
    changeCity(city.name);
    redirectMain(AppRoute.ROOT);
  };

  return (
    <li className="favorites__locations-items" key={id}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" onClick={redirectToMainCity}>
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper" onClick={onOfferCardClick}>
            <a href="#">
              <img className="place-card__image" src={image} width="150" height="110" alt="Place image" />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
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
                <span style={{width: (rating * 20) + `%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name" onClick={onOfferCardClick}>
              <a href="#">{title}</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </div>
    </li>
  );
};

FavoriteCard.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  redirectMain: PropTypes.func.isRequired,
  activateOffer: PropTypes.func.isRequired,
  offer: PropTypesOffer
};

const mapDispatchToProps = (dispatch) => ({
  redirectMain(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  },
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {FavoriteCard};
export default connect(null, mapDispatchToProps)(FavoriteCard);
