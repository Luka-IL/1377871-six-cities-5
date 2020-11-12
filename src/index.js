import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchOffersList, checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./const";


const Settings = {
  RENT_COUNT: 390
};

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        rentCount={Settings.RENT_COUNT}
      />
    </Provider>,
    document.querySelector(`#root`)
);
