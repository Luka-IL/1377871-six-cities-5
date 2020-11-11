import React from "react";
import {Main} from "../main/main";
import Login from "../login/login";
import Offer from "../offer/offer";
import Favorites from "../favorites/favorites";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  const {rentCount, offers} = props;


  return (
    <BrowserRouter>
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
              rentCount={rentCount}
              offers={offers}
              onOfferClick={() => history.push(`/offer/id`)}
            />
          )}>
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={offers}
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={({history}) => (
            <Offer
              offer={offers[0]}
              offers={offers}
              onMainClick={() => history.push(`/main`)}
              onOfferClick={() => history.push(`/offer/id`)}
            />
          )}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired
};


export default App;
