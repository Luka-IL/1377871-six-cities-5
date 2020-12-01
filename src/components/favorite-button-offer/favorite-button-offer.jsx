import React from "react";
import PropTypes from "prop-types";

const FavoriteButton = (props) => {

  const {favorite, onClickFavorite} = props;

  const classNameFavoriteButton = favorite ? `property__bookmark-button button property__bookmark-button--active` : `property__bookmark-button button`;

  return (
    <button className={classNameFavoriteButton} type="button" onClick={onClickFavorite}>
      <svg className="place-card__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  favorite: PropTypes.bool.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
