import React from "react";
import renderer from "react-test-renderer";
import FavoriteButton from "./favorite-button-offer";

it(`Should FavoriteButton render correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          onClickFavorite ={() => {}}
          favorite={true}
        >
          <React.Fragment />
        </FavoriteButton>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
