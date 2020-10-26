import {extend} from "../utils";
import {getOffers} from "../offers";
import {ActionType} from "./action";
import offers from "../mock/offers";

const initialState = {
  city: offers[0].city,
  offers: getOffers(offers[0].city),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.city,
        offers: getOffers(action.city)
      });
  }
  return state;
};

export {reducer};
