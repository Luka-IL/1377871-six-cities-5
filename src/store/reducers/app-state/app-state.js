import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {sortName} from "../../../const";

const initialState = {
  sort: sortName.POPULAR,
  active: {},
  comments: []
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
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
  }
  return state;
};

export {appState};
