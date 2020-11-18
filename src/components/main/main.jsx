import React from "react";
import PropTypes from "prop-types";
import CitiesPlaces from "../cities-places/cities-places";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";
import {connect} from "react-redux";

const Main = (props) => {

  const {onOfferClick, email} = props;

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
                    {email
                      ? <span className="header__user-name user__name">{email}</span>
                      : <span className="header__login">Sign in</span>}
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
  onOfferClick: PropTypes.func.isRequired,
  email: PropTypes.string
};

const mapStateToProps = ({USER}) => ({
  email: USER.email
});

export {Main};
export default connect(mapStateToProps)(Main);
