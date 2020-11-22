import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";

const AVATAR_URL = `https://api.adorable.io/avatars`;

const offers = [{
  pictures: [
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
    `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`
  ],
  title: `1Beautiful & luxurious studio at great location`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  premium: false,
  type: `apartment`,
  rating: 5,
  bedrooms: 3,
  guests: 4,
  price: 20,
  households: [
    `WiFi`, `Heating`, `Kitchen`, `Cable TV`
  ],
  owner: {
    avatar: `${AVATAR_URL}/3}`,
    name: `Karl`,
    super: true
  },
  coordinates: [
    52.3909553944608, 4.85309666408176
  ],
  neighbourhood: [
    [52.3909553943508, 4.85309666406198],
    [52.3809553943508, 4.939309666406198],
    [52.369553943508, 4.85309666406198]
  ],
  comments: [
    {
      guest: {
        name: `Max`,
        avatar: `${AVATAR_URL}/2}`
      },
      description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
      rating: 4,
      date: `April 2019`
    }, {
      guest: {
        name: `Lora`,
        avatar: `${AVATAR_URL}/3}`
      },
      description: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
      rating: 3,
      date: `Mart 2018`
    }
  ]
}];

jest.mock(`../map/map`, () => `Map`);
jest.mock(`../list-neighbours/list-neighbours`, () => `ListNeighbours`);


it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<Offer
      onMainClick={() => {}}
      onOfferClick={() => {}}
      offers={offers}
      offer={offers[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
