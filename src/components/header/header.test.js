import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";


it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <Header
          authorizationStatus ={`AUTH`}
          email={`asd@main.ru`}
          redirectToRoute={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
