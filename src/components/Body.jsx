import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BASE_URL} from "../utils/constant";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  
    const fetchUser = async() => {
      if (!userData) {
        navigate("/login");
        return;
      }
      try{
      const res = await axios.get(BASE_URL + "/profile", {
        withCredentials: true
      });
      dispatch(addUser(res.data));
  
    } catch(error) {
      navigate("/login");
      console.error("error in fetching User", error, error.status);
    }
  }

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
