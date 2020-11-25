import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const AVATAR_URL = `https://api.adorable.io/avatars`;

const store = mockStore({
  USER: {
    authorizationStatus: `AUTH`
  },
  STATE: {
    comments: [
      {
        user: {
          name: `Max`,
          avatar: `${AVATAR_URL}/2}`
        },
        description: `Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
        rating: 4,
        date: `April 2019`
      }, {
        user: {
          name: `Lora`,
          avatar: `${AVATAR_URL}/3}`
        },
        description: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipsum dolor sit amet`,
        rating: 3,
        date: `Mart 2018`
      }
    ]
  },
  DATA: {
    offers: [{
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
      users: 4,
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
    }],
    neighbours: [{
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
      users: 4,
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
    }]
  }
});

jest.mock(`../map/map`, () => `Map`);
jest.mock(`../list-neighbours/list-neighbours`, () => `ListNeighbours`);


it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Offer
            onMainClick={() => {}}
            onOfferClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
