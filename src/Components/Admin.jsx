import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Admin = () => {
  const { isLoggedIn } = useContext(AuthContext);

  //   if (!isLoggedIn) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div>
      <h1>Protected Route for Admin only</h1>
    </div>
  );
};

export default Admin;
