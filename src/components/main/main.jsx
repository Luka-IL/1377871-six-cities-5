import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ListOffers from "../list-offers/list-offers";
import Map from "../map/map";

class Main extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const {rentCount, offers, onOfferClick} = this.props;

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
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item tabs__item--active">
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{rentCount} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use href="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <ListOffers
                  offers={offers}
                  onOfferClick={onOfferClick}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

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

export default Main;
