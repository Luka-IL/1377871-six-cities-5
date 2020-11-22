import {ActionCreator, ActionType} from "./action";

describe(`Action creators work correctly`, () => {
  it(`Action creator creator return correct city`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      city: `Amsterdam`
    });
  });

  it(`Action creator creator return correct sort`, () => {
    expect(ActionCreator.changeSort(`popular`)).toEqual({
      type: ActionType.CHANGE_SORT,
      sort: `popular`
    });
  });

  it(`Action creator creator on hover offer return active offer`, () => {
    expect(ActionCreator.onHoverOffer({})).toEqual({
      type: ActionType.HOVER_OFFER,
      active: {}
    });
  });

  it(`Action creator creator return correct authorization status`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      authorizationStatus: `AUTH`
    });
  });

  it(`Action creator creator return correct email`, () => {
    expect(ActionCreator.addAuthorizationData(`dert@mail.ru`)).toEqual({
      type: ActionType.ADD_AUTHORIZATION_DATA,
      email: `dert@mail.ru`
    });
  });

  it(`Action creator creator return correct offers`, () => {
    expect(ActionCreator.loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      offers: []
    });
  });

  it(`Action creator creator return correct redirect to route`, () => {
    expect(ActionCreator.redirectToRoute(`sss`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      url: `sss`
    });
  });
});
