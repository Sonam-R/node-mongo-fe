import React, {useState} from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async() => {
    try{
      const response = await axios.post(
        BASE_URL + "/login", {
        emailId,
        password
      })
      dispatch(addUser(response.data));
      return navigate("/profile");
    } catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="card mx-auto m-50 flex max-w-sm shadow-sm">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email ID</legend>
            <input type="text" value={emailId} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Type here" />
          </fieldset>
          <div className="justify-end card-actions">
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
