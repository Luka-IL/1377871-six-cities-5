import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";

const review = {
  guest: {
    name: `Max`,
    avatar: ``
  },
  description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
  rating: 4,
  date: `April 2019`
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      review = {review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
