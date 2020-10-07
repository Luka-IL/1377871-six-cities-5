import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENT_COUNT: 390
};

ReactDOM.render(
    <App
      rentCount={Settings.RENT_COUNT}
    />,
    document.querySelector(`#root`)
);
