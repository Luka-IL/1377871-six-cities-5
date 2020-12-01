import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ListSort = (props) => {
  const {changeSort} = props;

  const getSortValue = (evt) => {
    evt.preventDefault();
    changeSort(evt.target.value);
  };

  return (
    <select className="places__option places__options--custom places__sorting-type" id="places-sorting" onChange={getSortValue}>
      <option className="places__option" value="popular">Popular</option>
      <option className="places__option" value="to-high">Price: low to high</option>
      <option className="places__option" value="to-low">Price: high to low</option>
      <option className="places__option" value="top-rated">Top rated first</option>
    </select>
  );
};

ListSort.propTypes = {
  changeSort: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeSort(sort) {
    dispatch(ActionCreator.changeSort(sort));
  }
});

export {ListSort};
export default connect(null, mapDispatchToProps)(ListSort);
