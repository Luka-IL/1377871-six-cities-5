import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const ListCities = (props) => {

  const {changeCity} = props;
  const cities = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];


  const cityClickHandler = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.id);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((item, i) => (
        <li key={`city-${i}`} className="locations__item">
          <a className="locations__item-link tabs__item" href="#" id={item} onClick={cityClickHandler}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

ListCities.propTypes = {
  changeCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {ListCities};
export default connect(null, mapDispatchToProps)(ListCities);
