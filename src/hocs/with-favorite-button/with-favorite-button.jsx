import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {changeFavoriteStatus, fetchFavoriteList, fetchOffersList} from "../../store/api-action";
import {AppRoute, AuthorizationStatus} from "../../const";

const withFavoriteButton = (Component) => {
  class WithFavoriteButton extends PureComponent {
    constructor(props) {
      super(props);
      this.favorite = props.favorite;
      this.state = {
        favorite: this.props.favorite
      };

      this.onClickFavorite = this.onClickFavorite.bind(this);
    }

    onClickFavorite(evt) {
      evt.preventDefault();

      this.favorite = !this.favorite;
      this.setState({
        favorite: this.favorite
      });

      const {loadOffersList, changeFavoriteState, loadFavoritesList, id, authorizationStatus, redirectToRoute} = this.props;

      if (authorizationStatus !== AuthorizationStatus.AUTH) {
        redirectToRoute(AppRoute.LOGIN);
        return;
      }
      const favoriteStatus = () => this.favorite ? `1` : `0`;
      changeFavoriteState(id, favoriteStatus());
      loadOffersList();
      loadFavoritesList();
    }

    render() {
      return (
        <Component
          favorite={this.state.favorite}
          onClickFavorite={this.onClickFavorite}
        />
      );
    }
  }

  WithFavoriteButton.propTypes = {
    favorite: PropTypes.bool.isRequired,
    changeFavoriteState: PropTypes.func.isRequired,
    loadFavoritesList: PropTypes.func.isRequired,
    redirectToRoute: PropTypes.func.isRequired,
    loadOffersList: PropTypes.func.isRequired,
    authorizationStatus: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  const mapStateToProps = ({USER}) => ({
    authorizationStatus: USER.authorizationStatus
  });

  const mapDispatchToProps = (dispatch) => ({
    redirectToRoute(url) {
      dispatch(ActionCreator.redirectToRoute(url));
    },

    changeFavoriteState(id, status) {
      dispatch(changeFavoriteStatus(id, status));
    },

    loadFavoritesList() {
      dispatch(fetchFavoriteList());
    },

    loadOffersList() {
      dispatch(fetchOffersList());
    },
  });
  return connect(mapStateToProps, mapDispatchToProps)(WithFavoriteButton);
};

export default withFavoriteButton;
