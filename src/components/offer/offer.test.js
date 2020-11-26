import React from "react";
import renderer from "react-test-renderer";
import {Offer} from "./offer";

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
jest.mock(`../list-neighbours/list-neighbours`, () => `ListNeighbours`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../list-reviews/list-reviews`, () => `ListReviews`);


it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <Offer
          onMainClick={() => {}}
          onOfferClick={() => {}}
          loadNeighbourhoods={() => {}}
          loadComments={() => {}}
          changeFavoriteState={() => {}}
          loadFavoritesList={() => {}}
          id={1}
          offers={offers}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
