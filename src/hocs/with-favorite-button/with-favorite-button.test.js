import React from "react";
import renderer from "react-test-renderer";
import withFavoriteButton from "./with-favorite-button";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const store = mockStore({
  DATA: {
    active:
      {
        title: `1Beautiful & luxurious studio at great location`,
        premum: false,
        type: `apartment`,
        price: 20,
        rating: 4
      },
  },
  USER: {
    authorizationStatus: `AUTH`
  }
});
const MockComponent = () => {
  return (
    <React.Fragment />
  );
};

const MockComponentWrapped = withFavoriteButton(MockComponent);

it(`WithReviewsForm is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        loadOffersList={() => {}}
        changeFavoriteState={() => {}}
        loadFavoritesList={() => {}}
        id={0}
        authorizationStatus={`AUTH`}
        redirectToRoute={() => {}}
        favorite={true}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
