import {ActionType} from "../../action";
import {appState} from "./app-state";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    sort: `popular`,
    active: {},
    comments: []
  });
});

it(`Reducer should update sort by change sort`, () => {
  expect(appState({}, {
    type: ActionType.CHANGE_SORT,
    payload: `popular`,
  })).toEqual({
    sort: `popular`,
  });
});

it(`Reducer should update active offer by hover offer`, () => {
  expect(appState({}, {
    type: ActionType.HOVER_OFFER,
    payload: {},
  })).toEqual({
    active: {},
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(appState({}, {
    type: ActionType.LOAD_COMMENTS,
    payload: [],
  })).toEqual({
    comments: [],
  });
});
