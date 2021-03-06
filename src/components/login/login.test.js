import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

jest.mock(`../header/header`, () => `Header`);

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(
        <Login
          onSubmit={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
