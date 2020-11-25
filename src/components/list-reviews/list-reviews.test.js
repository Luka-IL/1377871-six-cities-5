import React from "react";
import renderer from "react-test-renderer";
import ListReviews from "./list-reviews";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const AVATAR_URL = `https://api.adorable.io/avatars`;

const store = mockStore({
  USER: {
    email: `drt@mail.r`,
    authorizationStatus: `AUTH`
  },
  STATE: {
    comments: [
      {
        user: {
          name: `Max`,
          avatar: `${AVATAR_URL}/3}`
        },
        description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
        rating: 4,
        date: `April 2019`
      }, {
        user: {
          name: `Max`,
          avatar: `${AVATAR_URL}/2}`
        },
        description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
        rating: 4,
        date: `April 2019`
      },
    ]
  }
});


it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <ListReviews />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
