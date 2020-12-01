
import React from "react";
import PropTypes from "prop-types";

const FavoriteButtonOfferCard = (props) => {

  const {favorite, onClickFavorite} = props;

  const classNameFavoriteButton = favorite ? `place-card__bookmark-button button place-card__bookmark-button--active` : `place-card__bookmark-button button`;

  return (
    <button className={classNameFavoriteButton} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19" onClick={onClickFavorite}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButtonOfferCard.propTypes = {
  favorite: PropTypes.bool.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
};

export default FavoriteButtonOfferCard;
