import React from "react";
import Main from "../main/main";
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
        <Route exact path="/">
          <Main rentCount={rentCount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id" component={Offer} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
};


export default App;
