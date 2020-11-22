import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ListSort} from "./list-sort";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
  target: {
    value: `popular`
  }
};

it(`Click by City link calls callback`, () => {
  const handleChangeSortValue = jest.fn();
  const wrapper = shallow(<ListSort
    changeSort={handleChangeSortValue}>
  </ListSort>);

  wrapper.find(`.places__sorting-type`).simulate(`change`, mockEvent);
  expect(handleChangeSortValue).toHaveBeenCalledTimes(1);
});
