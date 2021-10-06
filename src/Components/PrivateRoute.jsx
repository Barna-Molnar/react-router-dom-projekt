import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    // <Route
    //   {...rest}
    //   render={() => {
    //     return isLoggedIn ? Component : <Redirect to="/about" />;
    //   }}
    // />
    <Route {...rest}>
      {isLoggedIn ? <Component /> : <Redirect to="/about" />}
    </Route>
  );
};

export default PrivateRoute;
