/* eslint-disable react/prop-types */
import React from 'react';

const Register = ({ routeChange }) => (
  <main className="pa4 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
    <div className="measure">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f2 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">
            Name
            <input
              className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
            />
          </label>
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
            <input
              className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
            />
          </label>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">
            Password
            <input
              className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
            />
          </label>
        </div>
      </fieldset>
      <div className="">
        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          value="Register"
          onClick={() => routeChange('home')}
        />
      </div>
    </div>
  </main>
);

export default Register;
