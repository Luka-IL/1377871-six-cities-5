import React from "react";
import renderer from "react-test-renderer";
import {ListSort} from "./list-sort";

it(`Should ListSort render correctly`, () => {
  const tree = renderer
    .create(<ListSort
      changeSort={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
