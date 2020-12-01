import React from "react";
import renderer from "react-test-renderer";
import FavoriteButtonOfferCard from "./favorite-button-offer-card";

it(`Should FavoriteButtonOfferCard render correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButtonOfferCard
          onClickFavorite ={() => {}}
          favorite={true}
        >
          <React.Fragment />
        </FavoriteButtonOfferCard>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
