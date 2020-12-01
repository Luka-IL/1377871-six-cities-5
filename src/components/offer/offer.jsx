import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ListReviews from "../list-reviews/list-reviews";
import Map from "../map/map";
import ListNeighbors from "../list-neighbors/list-neighbors";
import {connect} from "react-redux";
import Header from "../header/header";
import FavoriteButtonComponent from "../favorite-button-offer/favorite-button-offer";
import {fetchCommentsList, changeFavoriteStatus, fetchNeighborhoodsList} from "../../store/api-action";
import withFavoriteButton from "../../hocs/with-favorite-button/with-favorite-button";
import {PropTypesOffer, PropTypesComments} from "../../proptypes";

const FavoriteButton = withFavoriteButton(FavoriteButtonComponent);

class Offer extends PureComponent {
  constructor(props) {
    super(props);

    const {id, loadNeighborhoods, loadComments} = this.props;
    this.newId = id;
    loadComments(id);
    loadNeighborhoods(id);
  }

  render() {
    const {onOfferClick, loadComments, loadNeighborhoods, comments, neighborhoods, offers, id} = this.props;

    if (this.newId !== id) {
      loadComments(id);
      loadNeighborhoods(id);
      this.newId = id;
    }

    this.offer = offers.filter((item) => item.id === Number(id))[0];
    const {title, rating, type, bedrooms, guests, price, goods, favorite, host, images, premium} = this.offer;
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((item, i) => (
                  <div className="property__image-wrapper" key={`picture-${i}`}>
                    <img className="property__image" src={item} alt="Photo studio" />
                  </div>
                )) }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {premium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <FavoriteButton
                    favorite={favorite}
                    id={Number(id)}
                  />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (Math.round(rating) * 20) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item, i) => (
                      <li className="property__inside-item" key={`household-${i}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <ListReviews
                  comments={comments}
                  id={id}
                />
              </div>
            </div>
            <section className="cities__map map" style={{width: 40 + `em`, height: 20 + `em`, margin: `auto`}}>
              <Map
                offers={neighborhoods}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighborhood</h2>
              <ListNeighbors
                neighborhoods={neighborhoods}
                onOfferClick={onOfferClick}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  comments: PropTypesComments,
  neighborhoods: PropTypes.arrayOf(PropTypesOffer),
  email: PropTypes.string,
  loadNeighborhoods: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  changeFavoriteState: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  onMainClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypesOffer),
  id: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, STATE, USER}) => ({
  offers: DATA.offers,
  neighborhoods: DATA.neighborhoods,
  comments: STATE.comments,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteState(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  },

  loadNeighborhoods(id) {
    dispatch(fetchNeighborhoodsList(id));
  },

  loadComments(id) {
    dispatch(fetchCommentsList(id));
  },
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
