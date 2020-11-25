import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FavoriteCard} from "../favorite-card/favorite-card";
import Header from "../header/header";

const Favorites = (props) => {

  const {offers, onOfferClick} = props;
  const favoriteOffers = offers.filter((item) => (item.favorite));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffers.map((item, i) => (
                <FavoriteCard
                  onOfferClick={onOfferClick}
                  offer={item}
                  key={i}
                />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }))
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
