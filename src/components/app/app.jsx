import React from "react";
import {Main} from "../main/main";
import Login from "../login/login";
import Offer from "../offer/offer";
import Favorites from "../favorites/favorites";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = (props) => {

  const {rentCount} = props;


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
              onOfferClick={() => history.push(`/offer/id`)}
            />
          )}>
        </Route>
        <Route exact path="/favorites">
          <Favorites
          />
        </Route>
        <Route exact
          path="/offer/:id"
          render={({history}) => (
            <Offer
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
};


export default App;
