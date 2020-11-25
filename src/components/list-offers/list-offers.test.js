import React from "react";
import renderer from "react-test-renderer";
import ListOffers from "./list-offers";
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
    active: {
      city: {
        name: `Amsterdam`
      },
      title: `2Beautiful & luxurious studio at great location`,
      premium: false,
      type: `room`,
      price: 70,
      image: ``
    }
  },
  STATE: {
    sort: `popular`
  }
});

it(`Should ListOffers render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <ListOffers
            onOfferClick={() => {}}
          >
            <React.Fragment />
          </ListOffers>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
