import {ActionType} from "../../action";
import {appState} from "./app-state";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    sort: `popular`,
    active: {}
  });
});

it(`Reducer should update sort by change sort`, () => {
  expect(appState({}, {
    type: ActionType.CHANGE_SORT,
    sort: `popular`,
  })).toEqual({
    sort: `popular`,
  });
});

it(`Reducer should update active offer by hover offer`, () => {
  expect(appState({}, {
    type: ActionType.HOVER_OFFER,
    active: {},
  })).toEqual({
    active: {},
  });
});
