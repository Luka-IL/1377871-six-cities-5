
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  HOVER_OFFER: `HOVVER_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_OFFERS: `LOAD_OFFERS`,
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
    status: item,
  }),
  loadOffers: (item) => ({
    type: ActionType.LOAD_OFFERS,
    offers: item,
  })
};
