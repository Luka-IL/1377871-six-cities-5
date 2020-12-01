import React from "react";
import renderer from "react-test-renderer";
import {FavoriteCard} from "./favorite-card";
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
  city: {
    name: `Amsterdam`
  },
  title: `1Beautiful & luxurious studio at great location`,
  premium: false,
  type: `apartment`,
  price: 20,
  rating: 4,
  image: ``
};

it(`Should FavoriteCard render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <FavoriteCard
            onOfferClick ={() => {}}
            offer={offer}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
