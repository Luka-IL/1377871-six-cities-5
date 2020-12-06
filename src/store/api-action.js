import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch(({}) => dispatch(ActionCreator.loadOffers([])))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data)))
);

export const fetchNeighborhoodsList = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
  .then(({data}) => dispatch(ActionCreator.loadNeighborhoods(data)))

);

export const changeFavoriteStatus = (id, active) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${active}`)
);

export const postComment = (id, comment) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, comment)
  .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then((data) => dispatch(ActionCreator.addAuthorizationData(data.data.email)))
  .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  .then(() => dispatch(fetchFavoriteList()))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.addAuthorizationData(email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchFavoriteList()))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
