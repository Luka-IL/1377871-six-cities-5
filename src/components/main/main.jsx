import React from "react";
import PropTypes from "prop-types";
import CitiesPlaces from "../cities-places/cities-places";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";

export const Main = (props) => {

  const {onOfferClick} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCities
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlaces
              onOfferClick={onOfferClick}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  rentCount: PropTypes.number.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    premium: PropTypes.bool.Required,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    households: PropTypes.array.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }),
    comments: PropTypes.arrayOf(PropTypes.shape({
      guest: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      }),
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }))
  }))
};

