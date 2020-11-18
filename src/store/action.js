
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  HOVER_OFFER: `HOVVER_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  ADD_AUTHORIZATION_DATA: `ADD_AUTHORIZATION_DATA`
};

export const ActionCreator = {
  changeCity: (item) => ({
    type: ActionType.CHANGE_CITY,
    city: item
  }),
  changeSort: (item) => ({
    type: ActionType.CHANGE_SORT,
    sort: item
  }),
  onHoverOffer: (item) => ({
    type: ActionType.HOVER_OFFER,
    active: item
  }),
  requireAuthorization: (item) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus: item,
  }),
  addAuthorizationData: (item) => ({
    type: ActionType.ADD_AUTHORIZATION_DATA,
    email: item
  }),
  loadOffers: (item) => ({
    type: ActionType.LOAD_OFFERS,
    offers: item,
  }),
  redirectToRoute: (item) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    url: item,
  })
};
