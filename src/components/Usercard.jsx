import React from "react";

const Usercard = ({userData}) => {
  console.log(userData, "userData");
  return (
    <>
      {userData &&
        <div className="card mx-auto m-40 bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://picsum.photos/id/1/200/300"
              alt="img"
            />
          </figure>
          <div className="card-body">
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row">
              <div>
                <div>First Name: {userData.firstName}</div>
              </div>
            </li>
            <li className="list-row">
              <div>
                <div>Last Name: {userData.lastName}</div>
              </div>
            </li>
            <li className="list-row">
              <div>
                <div>Email ID: {userData.emailId}</div>
              </div>
            </li>
            <li className="list-row">
              <div>
                <div>Gender: {userData.gender}</div>
              </div>
            </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default Usercard;
