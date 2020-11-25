import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewsForm from "./with-reviews-form";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewsForm(MockComponent);

it(`Should return state`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        postComment={() => {}}
      />);

  expect(wrapper.state().comment).toEqual(``);
  expect(wrapper.state().rating).toEqual(0);
});
