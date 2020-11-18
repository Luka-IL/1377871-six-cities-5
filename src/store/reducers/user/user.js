import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.authorizationStatus
      });
    case ActionType.ADD_AUTHORIZATION_DATA:
      return extend(state, {
        email: action.email
      });
  }

  return state;
};

export {user};
