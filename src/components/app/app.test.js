import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

jest.mock(`../main/main`, () => `Main`);
jest.mock(`../login/login`, () => `Login`);
jest.mock(`../offer/offer`, () => `Offer`);
jest.mock(`../favorites/favorites`, () => `Favorites`);
jest.mock(`../private-route/private-route`, () => `PrivateRoute`);

it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App>
          <React.Fragment />
        </App>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
