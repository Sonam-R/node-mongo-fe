import React, { useEffect, useState } from "react";
import Usercard from "./userCard";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addProfile } from "../utils/profileSlice";

const ProfileEdit = () => {

  const profile = useSelector((store) => store.profile);
  const [firstName, setName] = useState(profile?.firstName);
  const [lastName, setLastName] = useState(profile?.lastName);
  const [emailId, setEmailId] = useState(profile?.emailId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailId(event.target.value);
  };

  const handleSave = async () => {
    try {
      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        emailId
      });
      dispatch(addProfile(res.data));
      return navigate("/profile");
    } catch (err) {
      console.error("error in fetching profile", err, err.status);
    }
  };

  useEffect(() => {
    // getProfile();
  }, []);

  return (
    <>
    {profile &&
      <div className="card mx-auto m-50 flex max-w-sm shadow-sm">
          <div className="card-body">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Firs Name</legend>
              <input type="text" value={firstName} onChange={handleNameChange} className="input" placeholder={profile?.firstName} />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Last Name</legend>
              <input type="text" value={lastName} onChange={handleLastNameChange}  className="input" placeholder={profile?.lastName}  />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Skill Set</legend>
              <input type="text" value={emailId} onChange={handleEmailChange}  className="input" placeholder={profile?.emailId} />
            </fieldset>
            <div className="justify-end card-actions">
              <button onClick={handleSave} className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
    }
    </>
  );
};

export default ProfileEdit;
