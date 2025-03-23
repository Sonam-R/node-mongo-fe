import React, { useEffect } from "react";
import Usercard from "./userCard";
import { BASE_URL } from "../utils/constant";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../utils/profileSlice";

const Profile = () => {
  const profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const getProfile = async() => {
    try {
      if (profile) {
        return
      }
      const res = await axios.get(BASE_URL + "/profile", {withCredentials: true});
      dispatch(addProfile(res.data));

    } catch (err) {
      console.error("error in fetching profile", err, err.status);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);
  
  return (
    <>
      <Usercard userData={profile} />
    </>
  );
};

export default Profile;
