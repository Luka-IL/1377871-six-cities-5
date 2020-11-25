import React from "react";
import renderer from "react-test-renderer";
import CitiesPlaces from "./cities-places";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  DATA: {
    offers: [
      {
        city: {
          name: `Amsterdam`
        },
        title: `1Beautiful & luxurious studio at great location`,
        premium: false,
        type: `apartment`,
        price: 20,
        rating: 4,
        image: ``
      }, {
        city: {
          name: `Amsterdam`
        },
        title: `2Beautiful & luxurious studio at great location`,
        premium: false,
        type: `room`,
        price: 70,
        rating: 4,
        image: ``
      }
    ],
    city: `Amsterdam`
  },
  STATE: {
    sort: `popular`
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});


it(`Should CitiesPlaces render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <CitiesPlaces
            onOfferClick ={() => {}}
          >
            <React.Fragment />
          </CitiesPlaces>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
