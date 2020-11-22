import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews-form";

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(<Reviews
      handleSubmitForm = {() => {}}
      handleFieldChange = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
