import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";

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
    .create(<OfferCard
      onHoverOffer={() => {}}
      onOfferClick={() => {}}
      offer={offer}
      activeClass={``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
