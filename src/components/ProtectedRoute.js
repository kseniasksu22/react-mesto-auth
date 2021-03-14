import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      <Header email={props.email} click={props.click} text="Выйти" />

      {props.loggedIn === true ? (
        <Component {...props} /> || <Component {...props} />
      ) : (
        <Redirect to="./signin" />
      )}
    </Route>
  );
};

export default ProtectedRoute;
