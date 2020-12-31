/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Navigation = ({ routeChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={() => routeChange('signout')}
        >
          Sign Out
        </p>
      </nav>
    );
  }
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p className="f3 link dim black underline pa3 pointer" onClick={() => routeChange('signin')}>
        Sign In
      </p>
      <p
        className="f3 link dim black underline pa3 pointer"
        onClick={() => routeChange('register')}
      >
        Register
      </p>
    </nav>
  );
};
export default Navigation;
