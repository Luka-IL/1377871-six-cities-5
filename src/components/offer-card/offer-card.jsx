import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {changeFavoriteStatus, fetchFavoriteList} from "../../store/api-action";


const OfferCard = (props) => {

  const {offer, onOfferClick, activateOffer, activeClass, activeOffer, redirectToRoute, changeFavoriteState, loadFavoritesList, authorizationStatus} = props;
  const {price, title, rating, type, premium, image, id} = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    activateOffer(offer);
    onOfferClick(`/offer/${id}`);
  };
  const onMouseOut = (evt) => {
    evt.preventDefault();
    activateOffer({});
  };
  const onMouseOver = (evt) => {
    evt.preventDefault();
    activateOffer(offer);
  };
  const onClickFavorite = (evt) => {
    evt.preventDefault();
    if (authorizationStatus !== `AUTH`) {
      redirectToRoute(`/`);
      return;
    }
    const favoriteStatus = () => offer.favorite ? `0` : `1`;
    changeFavoriteState(id, favoriteStatus());
    loadFavoritesList();
    offer.favorite = !offer.favorite;
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19" onClick={onClickFavorite}>
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
  offer: PropTypes.shape({
    favorite: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,

  }),
  redirectToRoute: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteState: PropTypes.func.isRequired,
  loadFavoritesList: PropTypes.func.isRequired,
  activeOffer: PropTypes.bool.isRequired,
  activateOffer: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  },
  activateOffer(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  },

  changeFavoriteState(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  },

  loadFavoritesList() {
    dispatch(fetchFavoriteList());
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
