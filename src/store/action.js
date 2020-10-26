
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  HOVER_OFFER: `HOVVER_OFFER`
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
};
