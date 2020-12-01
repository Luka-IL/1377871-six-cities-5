import React from "react";
import Main from "../main/main";
import Login from "../login/login";
import Offer from "../offer/offer";
import Favorites from "../favorites/favorites";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.LOGIN}
          render={() => (
            <Login
            />
          )}>
        </Route>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <Main
              onOfferClick={(url) => history.push(url)}
            />
          )}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={({history}) => {
            return (
              <Favorites
                onOfferClick={(url) => history.push(url)}
              />
            );
          }}
        />
        <Route exact
          path={`${AppRoute.OFFER}/:id`}
          render={({history, match}) => (
            <Offer
              id={match.params.id}
              onMainClick={() => history.push(AppRoute.ROOT)}
              onOfferClick={(url) => history.push(url)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
