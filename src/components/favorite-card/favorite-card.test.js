import React from "react";
import renderer from "react-test-renderer";
import {FavoriteCard} from "./favorite-card";

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
        <FavoriteCard
          onOfferClick ={() => {}}
          offer={offer}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
