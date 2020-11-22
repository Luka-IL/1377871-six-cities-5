import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ListCities} from "./list-cities";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
  target: {
    id: `Amsterdam`
  }
};

it(`Click by City link calls callback`, () => {
  const handleChangeCity = jest.fn();
  const wrapper = shallow(<ListCities
    changeCity={handleChangeCity}>
  </ListCities>);

  wrapper.find(`#Amsterdam`).simulate(`click`, mockEvent);
  expect(handleChangeCity).toHaveBeenCalledTimes(1);
});
