import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";

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

const active = {
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


it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          active={active}
          city={`Amsterdam`}
          offers={offers}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
