import {createAPI} from "../../../services/api";
import {fetchOffersList} from "../../api-action";
import MockAdapter from "axios-mock-adapter";
import {ActionType} from "../../action";
import {appData} from "./app-data";

const api = createAPI();

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appData(void 0, {})).toEqual({
    city: `Amsterdam`,
    offers: [],
    favorites: [],
    neighbourhoods: []
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(appData({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: [],
  })).toEqual({
    offers: [],
  });
});

it(`Reducer should update offers by change city`, () => {
  expect(appData({}, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`
  })).toEqual({
    city: `Amsterdam`
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [],
        });
      });
  });
});
