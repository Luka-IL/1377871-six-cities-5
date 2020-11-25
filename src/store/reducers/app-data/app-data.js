import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {cities} from "../../../const";

const initialState = {
  city: cities.AMSTERDAM,
  offers: [],
  favorites: [],
  neighbourhoods: []
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });
    case ActionType.LOAD_NEIGHBOURHOODS:
      return extend(state, {
        neighbourhoods: action.payload
      });
  }
  return state;
};

export {appData};
