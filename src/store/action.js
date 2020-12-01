import {adaptOffersToClient, adaptCommentToClient} from "../utils";


export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  HOVER_OFFER: `HOVVER_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  ADD_AUTHORIZATION_DATA: `ADD_AUTHORIZATION_DATA`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_NEIGHBORHOODS: `LOAD_NEIGHBORHOODS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSort: (sort) => ({
    type: ActionType.CHANGE_SORT,
    payload: sort
  }),
  activateOffer: (active) => ({
    type: ActionType.HOVER_OFFER,
    payload: active
  }),
  requireAuthorization: (authorizationStatus) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: authorizationStatus,
  }),
  addAuthorizationData: (email) => ({
    type: ActionType.ADD_AUTHORIZATION_DATA,
    payload: email
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: adaptOffersToClient(offers),
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: adaptCommentToClient(comments),
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: adaptOffersToClient(favorites),
  }),
  loadNeighborhoods: (neighborhoods) => ({
    type: ActionType.LOAD_NEIGHBORHOODS,
    payload: adaptOffersToClient(neighborhoods),
  })
};
