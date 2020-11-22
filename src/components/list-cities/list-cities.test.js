import React from "react";
import renderer from "react-test-renderer";
import {ListCities} from "./list-cities";

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(<ListCities
      changeCity={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
