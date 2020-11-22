import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";

configure({adapter: new Adapter()});

const AVATAR_URL = `https://api.adorable.io/avatars`;

const offer = {
  image: ``,
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
  const handleOfferClick = jest.fn();
  const handleHoverOffer = jest.fn();

  const mockEvent = {
    preventDefault() {}
  };

  const wrapper = shallow(<OfferCard
    onOfferClick={handleOfferClick}
    onHoverOffer={handleHoverOffer}
    offer={offer}
    activeClass={``}>
  </OfferCard>);

  wrapper.find(`.place-card`).simulate(`click`, mockEvent);
  wrapper.find(`.place-card`).simulate(`mouseover`, mockEvent);

  expect(handleOfferClick).toHaveBeenCalledTimes(1);
  expect(handleHoverOffer).toHaveBeenCalledTimes(1);

});
