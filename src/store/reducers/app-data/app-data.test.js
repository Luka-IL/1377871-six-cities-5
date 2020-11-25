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
    allOffers: [],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(appData({
    offers: [],
    allOffers: []
  }, {
    type: ActionType.LOAD_OFFERS,
    offers: [],
    allOffers: []
  })).toEqual({
    offers: [],
    allOffers: []
  });
});

it(`Reducer should update offers by change city`, () => {
  expect(appData({
    allOffers: []
  }, {
    type: ActionType.CHANGE_CITY,
    city: `Amsterdam`
  })).toEqual({
    city: `Amsterdam`,
    offers: [],
    allOffers: []
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
          offers: [{fake: true}],
        });
      });
  });
});
