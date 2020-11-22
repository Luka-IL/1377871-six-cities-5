import React from "react";
import renderer from "react-test-renderer";
import withReviewsForm from "./with-reviews-form";

const MockComponent = () => {
  return (
    <React.Fragment />
  );
};

const MockComponentWrapped = withReviewsForm(MockComponent);

it(`WithReviewsForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
