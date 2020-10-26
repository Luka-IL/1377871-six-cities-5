import React from "react";
import PropTypes from "prop-types";

export const ListCities = (props) => {
  const {cities, changeCity} = props;

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
  cities: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired
};
