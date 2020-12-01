import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  DATA: {
    active:
      {
        title: `1Beautiful & luxurious studio at great location`,
        premum: false,
        type: `apartment`,
        price: 20,
        rating: 4
      },
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});

const offer = {
  title: `1Beautiful & luxurious studio at great location`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  premium: false,
  type: `apartment`,
  rating: 5,
  bedrooms: 3,
  guests: 4,
  price: 20,
  image: ``
};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <OfferCard
            activateOffer={() => {}}
            onOfferClick={() => {}}
            offer={offer}
            activeClass={``}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
