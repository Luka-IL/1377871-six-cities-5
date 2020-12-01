import React from "react";
import renderer from "react-test-renderer";
import {Offer} from "./offer";
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

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`
    },
    title: `1Beautiful & luxurious studio at great location`,
    premium: false,
    type: `apartment`,
    price: 20,
    rating: 4,
    image: ``,
    images: [],
    goods: [],
    host: {
      avatar: ``,
      name: ``
    }

  }, {
    id: 1,
    city: {
      name: `Amsterdam`
    },
    title: `2Beautiful & luxurious studio at great location`,
    premium: false,
    type: `room`,
    price: 70,
    rating: 4,
    image: ``,
    images: [],
    goods: [],
    host: {
      avatar: ``,
      name: ``
    }
  }
];
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../list-neighbors/list-neighbors`, () => `ListNeighbours`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../list-reviews/list-reviews`, () => `ListReviews`);


it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Offer
            onMainClick={() => {}}
            onOfferClick={() => {}}
            loadNeighborhoods={() => {}}
            loadComments={() => {}}
            changeFavoriteState={() => {}}
            loadFavoritesList={() => {}}
            id={1}
            offers={offers}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
