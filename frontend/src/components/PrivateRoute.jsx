import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivatePage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
};

export default PrivatePage;
