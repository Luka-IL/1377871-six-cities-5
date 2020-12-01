import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FavoriteCard} from "../favorite-card/favorite-card";
import Header from "../header/header";
import {ActionCreator} from "../../store/action";
import {PropTypesOffer} from "../../proptypes";

const Favorites = (props) => {

  const {favorites, onOfferClick, changeCity, activateOffer, redirect} = props;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {(favorites.length > 0) ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favorites.map((item, i) => (
                  <FavoriteCard
                    activateOffer={activateOffer}
                    onOfferClick={onOfferClick}
                    offer={item}
                    key={i}
                    changeCity={changeCity}
                    redirectMain={redirect}
                  />
                ))}
              </ul>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          }
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
  changeCity: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired,
  activateOffer: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypesOffer),
};

const mapStateToProps = ({DATA}) => ({
  favorites: DATA.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  redirect(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  },
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  activateOffer(offer) {
    dispatch(ActionCreator.activateOffer(offer));
  }
});


export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
