import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus, cities} from "../../../const";

const initialState = {
  city: cities.AMSTERDAM,
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
  }
  return state;
};

export {appData};
