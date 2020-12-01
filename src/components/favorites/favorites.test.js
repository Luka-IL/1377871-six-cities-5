import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({
  USER: {
    email: ``
  },
  DATA: {
    city: `Amsterdam`,
    favorites: [
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
      rating: 4,
      price: 70,
    }
  },
  STATE: {
    sort: `popular`
  }
});
const favorites = [
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
];

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Favorites
            favorites={favorites}
            onOfferClick={() => {}}
            changeCity={() => {}}
            redirect={() => {}}
            activateOffer={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
