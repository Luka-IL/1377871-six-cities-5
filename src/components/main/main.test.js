import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  USER: {
    email: ``
  },
  DATA: {
    city: `Amsterdam`,
    offers: [
      {
        title: `1Beautiful & luxurious studio at great location`,
        premium: false,
        type: `apartment`,
        price: 20,
        rating: 4,
        image: ``
      }, {
        title: `2Beautiful & luxurious studio at great location`,
        premium: false,
        type: `room`,
        price: 70,
        rating: 4,
        image: ``
      }
    ],
    active: {
      title: `2Beautiful & luxurious studio at great location`,
      premium: false,
      type: `room`,
      rating: 4,
      price: 70,
    }
  },
  STATE: {
    sort: `popular`
  }
});

jest.mock(`../map/map`, () => `Map`);


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            onOfferClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
