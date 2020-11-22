import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites";

const offers = [
  {
    pictures: [
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`
    ],
    title: `1Beautiful & luxurious studio at great location`,
    premium: false,
    type: `apartment`,
    price: 20,
    rating: 4
  }, {
    pictures: [
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`
    ],
    title: `2Beautiful & luxurious studio at great location`,
    premium: false,
    type: `room`,
    price: 70,
    rating: 4
  }, {
    pictures: [
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`
    ],
    title: `3Beautiful & luxurious studio at great location`,
    premium: false,
    type: `apartment`,
    price: 20,
    rating: 4
  }, {
    pictures: [
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`,
      `http://farm66.static.flickr.com/65535/50440663037_e00f7f6e12_b.jpg`
    ],
    title: `4Beautiful & luxurious studio at great location`,
    premium: true,
    type: `hotel`,
    price: 120,
    rating: 4
  }
];

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(<Favorites
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
