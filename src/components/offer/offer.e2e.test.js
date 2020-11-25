import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Offer} from "./offer";

configure({adapter: new Adapter()});

const AVATAR_URL = `https://api.adorable.io/avatars`;
const offers = [{
  id: 2,
  images: [
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
  goods: [
    `WiFi`, `Heating`, `Kitchen`, `Cable TV`
  ],
  host: {
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

const offer = {
  images: [
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
};

jest.mock(`../map/map`, () => `Map`);
jest.mock(`../list-neighbours/list-neighbours`, () => `ListNeighbours`);

it(`Click by main link calls callback`, () => {
  const handleMainClick = jest.fn();
  const handleOfferClick = jest.fn();
  const handleLoadNeighbourhoods = jest.fn();
  const handleLoadComments = jest.fn();
  const handleChangeFavoriteState = jest.fn();
  const handleLoadFavoritesList = jest.fn();

  const mockEvent = {
    preventDefault() {}
  };


  const wrapper = shallow(<Offer
    loadNeighbourhoods={handleLoadNeighbourhoods}
    onOfferClick={handleOfferClick}
    onMainClick={handleMainClick}
    loadComments={handleLoadComments}
    changeFavoriteState={handleChangeFavoriteState}
    loadFavoritesList={handleLoadFavoritesList}
    offers={offers}
    offer={offer}
    id={2}>
  </Offer>);

  wrapper.find(`.property__bookmark-button`).simulate(`click`, mockEvent);
  expect(handleChangeFavoriteState).toHaveBeenCalledTimes(1);
});
