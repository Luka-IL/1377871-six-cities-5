import React from "react";
import PropTypes from "prop-types";
import CitiesPlaces from "../cities-places/cities-places";
import Map from "../map/map";
import ListCities from "../list-cities/list-cities";
import {MainEmpty} from "../main-empty/main-empty";
import {connect} from "react-redux";
import Header from "../header/header";
import {PropTypesOffer} from "../../proptypes";

const Main = (props) => {

  const {onOfferClick, offers} = props;
  const isEmpty = (offers.length > 0);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCities
            />
          </section>
        </div>
        {(isEmpty) ?
          <div className="cities">
            <div className="cities__places-container container">
              <CitiesPlaces
                onOfferClick={onOfferClick}
              />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                  />
                </section>
              </div>
            </div>
          </div>
          :
          <MainEmpty />
        }
      </main>
    </div>
  );
};

Main.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypesOffer),
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers
});

export {Main};
export default connect(mapStateToProps)(Main);
