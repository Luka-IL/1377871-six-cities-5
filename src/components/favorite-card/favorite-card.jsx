import React from "react";
import PropTypes from "prop-types";


export const FavoriteCard = (props) => {
  const {offer, onOfferClick, changeCity, activateOffer} = props;
  const {id, city, price, image, rating, type, title} = offer;

  const onOfferCardClick = (evt) => {
    evt.preventDefault();
    changeCity(city.name);
    activateOffer(offer);
    onOfferClick(`/offer/${id}`);
  };

  return (
    <li className="favorites__locations-items" key={id} onClick={onOfferCardClick}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
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
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: (rating * 20) + `%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
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
  activateOffer: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })
};
