import {extend, adaptToClient} from "../../../utils";
import {getOffers} from "../../../offers";
import {ActionType} from "../../action";
import {AuthorizationStatus, cities} from "../../../const";

const initialState = {
  city: cities.AMSTERDAM,
  offers: [],
  allOffers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.status,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: adaptToClient(action.offers),
        offers: getOffers(adaptToClient(action.offers), cities.AMSTERDAM)
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.city,
        offers: getOffers(state.allOffers, action.city)
      });
  }
  return state;
};

export {appData};
