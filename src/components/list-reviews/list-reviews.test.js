import React from "react";
import renderer from "react-test-renderer";
import ListReviews from "./list-reviews";

const AVATAR_URL = `https://api.adorable.io/avatars`;
const comments = [
  {
    guest: {
      name: `Max`,
      avatar: `${AVATAR_URL}/3}`
    },
    description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
    rating: 4,
    date: `April 2019`
  }, {
    guest: {
      name: `Max`,
      avatar: `${AVATAR_URL}/2}`
    },
    description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
    rating: 4,
    date: `April 2019`
  },
];

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(<ListReviews
      comments={comments}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
