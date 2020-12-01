import React from "react";
import renderer from "react-test-renderer";
import ListNeighbours from "./list-neighbors";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const offers = [
  {
    title: `1Beautiful & luxurious studio at great location`,
    premium: false,
    type: `apartment`,
    price: 20,
    rating: 4,
    image: ``
  }, {
    title: `2Beautiful & luxurious studio at great location`,
    premium: false,
    type: `room`,
    price: 70,
    rating: 4,
    image: ``
  }
];

const store = mockStore({
  DATA: {
    active:
      {
        title: `1Beautiful & luxurious studio at great location`,
        premium: false,
        type: `apartment`,
        price: 20,
        rating: 4
      },
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});

it(`Should ListNeighbours render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <ListNeighbours
          neighborhoods={offers}
          onOfferClick={() => {}}
        >
          <React.Fragment />
        </ListNeighbours>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

