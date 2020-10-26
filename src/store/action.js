
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

export const ActionCreator = {
  changeCity: (item) => ({
    type: ActionType.CHANGE_CITY,
    city: item
  }),
};
