import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const ListCities = (props) => {

  const {changeCity} = props;
  const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];


  const cityClickHandler = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.id);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item, i) => (
        <li key={`city-${i}`} className="locations__item">
          <a className={`locations__item-link tabs__item ${props.city === item ? `tabs__item--active` : ``}`} href="#" id={item} onClick={cityClickHandler}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

ListCities.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  city: DATA.city
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {ListCities};
export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
