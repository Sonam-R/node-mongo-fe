import React from "react";

const Login = () => {
  return (
    <>
      <div className="card mx-auto m-50 flex max-w-sm shadow-sm">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" placeholder="Type here" />
          </fieldset>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
