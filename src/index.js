import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mock/offers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";


const Settings = {
  RENT_COUNT: 390
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        rentCount={Settings.RENT_COUNT}
        offers={offers[0].offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
