import {extend} from "../utils";
import {getOffers} from "../offers";
import {ActionType} from "./action";
import offers from "../mock/offers";

const initialState = {
  city: offers[0].city,
  offers: getOffers(offers[0].city),
  sort: `popular`,
  active: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.city,
        offers: getOffers(action.city)
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        sort: action.sort
      });
    case ActionType.HOVER_OFFER:
      return extend(state, {
        active: action.active
      });
  }
  return state;
};

export {reducer};
