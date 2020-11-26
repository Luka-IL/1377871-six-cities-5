import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      },
    },
    name: `Amsterdam`,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      name: `Angelina`,
      pro: true,
    },
    id: 4,
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16,
    },
  }
];

const active = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  host: {
    avatar: `img/avatar-angelina.jpg`,
    id: 25,
    name: `Angelina`,
    pro: true,
  },
  id: 4,
  image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
  location: {
    latitude: 52.385540000000006,
    longitude: 4.902976,
    zoom: 16,
  }
};

it(`Should Map render correctly`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const tree = renderer
    .create(
        <Map
          active={active}
          city={`Amsterdam`}
          offers={offers}
          createMap={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
