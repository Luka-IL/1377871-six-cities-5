import React from "react";
import Main from "../main/main";
import Login from "../login/login";
import Offer from "../offer/offer";
import Favorites from "../favorites/favorites";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path="/"
          render={() => (
            <Login
            />
          )}>
        </Route>
        <Route exact
          path="/main"
          render={({history}) => (
            <Main
              onOfferClick={(url) => history.push(url)}
            />
          )}>
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={({history}) => {
            return (
              <Favorites
                onOfferClick={(url) => history.push(url)}
              />
            );
          }}
        />
        <Route exact
          path="/offer/:id"
          render={({history, match}) => (
            <Offer
              id={match.params.id}
              onMainClick={() => history.push(`/main`)}
              onOfferClick={(url) => history.push(url)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
