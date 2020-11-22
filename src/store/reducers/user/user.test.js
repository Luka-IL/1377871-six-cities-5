import {ActionType} from "../../action";
import {user} from "./user";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    email: null
  });
});

it(`Reducer should update authorization status by login`, () => {
  expect(user({}, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus: `AUTH`
  })).toEqual({
    authorizationStatus: `AUTH`
  });
});

it(`Reducer should update authorization data by login`, () => {
  expect(user({}, {
    type: ActionType.ADD_AUTHORIZATION_DATA,
    email: `der@mail.ru`
  })).toEqual({
    email: `der@mail.ru`
  });
});
