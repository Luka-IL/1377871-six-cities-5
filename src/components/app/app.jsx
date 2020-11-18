import React from "react";
import Main from "../main/main";
import Login from "../login/login";
import Offer from "../offer/offer";
import Favorites from "../favorites/favorites";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <Login
              onSubmitForm={() => history.push(`/main`)}
            />
          )}>
        </Route>
        <Route exact
          path="/main"
          render={({history}) => (
            <Main
              onOfferClick={() => history.push(`/offer/id`)}
            />
          )}>
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => {
            return (
              <Favorites/>
            );
          }}
        />
        <PrivateRoute exact
          path="/offer/:id"
          render={({history}) => (
            <Offer
              onMainClick={() => history.push(`/main`)}
              onOfferClick={() => history.push(`/offer/id`)}
            />
          )}>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
};


export default App;
