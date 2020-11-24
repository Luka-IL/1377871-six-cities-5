import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {sortName} from "../../../const";

const initialState = {
  sort: sortName.POPULAR,
  active: {}
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return extend(state, {
        sort: action.payload
      });
    case ActionType.HOVER_OFFER:
      return extend(state, {
        active: action.payload
      });
  }
  return state;
};

export {appState};
