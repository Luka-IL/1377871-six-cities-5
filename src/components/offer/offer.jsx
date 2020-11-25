import React from "react";
import PropTypes from "prop-types";
import ListReviews from "../list-reviews/list-reviews";
import Map from "../map/map";
import ListNeighbours from "../list-neighbours/list-neighbours";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import {fetchCommentsList, changeFavoriteStatus, fetchNeighbourhoodsList, fetchFavoriteList} from "../../store/api-action";


class Offer extends React.Component {
  constructor(props) {
    super(props);
    const {id, offers, loadNeighbourhoods} = this.props;
    this.offer = offers.filter((item) => item.id === Number(id))[0];
    loadNeighbourhoods(id);

    this.onClickFavorite = this.onClickFavorite.bind(this);
  }

  componentDidMount() {
    this.props.loadComments(this.props.id);
  }

  onClickFavorite(evt) {
    evt.preventDefault();
    const {changeFavoriteState, loadFavoritesList, id} = this.props;
    const favoriteStatus = () => this.offer.favorite ? `0` : `1`;
    this.offer.favorite = !this.offer.favorite;
    changeFavoriteState(id, favoriteStatus());
    loadFavoritesList();
  }

  render() {
    const {onOfferClick, id, offers, comments, neighbourhoods} = this.props;
    const {images, premium, title, rating, type, bedrooms, guests, price, goods, host} = this.offer;
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
                {!premium ? `` :
                  <div className="property__mark" premium>
                    <span>Premium</span>
                  </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className="property__bookmark-button button" type="button" onClick={this.onClickFavorite}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: (rating * 20) + `%`}}></span>
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
                      <img className="property__avatar user__avatar" src={host.avatar_url} width="74" height="74" alt="Host avatar" />
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
                offers={offers}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <ListNeighbours
                neighbourhoods={neighbourhoods}
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    guest: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }),
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  })),
  neighbourhoods: PropTypes.array.isRequired,
  email: PropTypes.string,
  loadNeighbourhoods: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  changeFavoriteState: PropTypes.func.isRequired,
  loadFavoritesList: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  onMainClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    favorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    })
  })
};

const mapStateToProps = ({DATA, STATE, USER}) => ({
  offers: DATA.offers,
  neighbourhoods: DATA.neighbourhoods,
  comments: STATE.comments,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchCommentsList(id));
  },

  changeFavoriteState(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  },

  loadNeighbourhoods(id) {
    dispatch(fetchNeighbourhoodsList(id));
  },

  loadFavoritesList() {
    dispatch(fetchFavoriteList());
  },

  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url))
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
