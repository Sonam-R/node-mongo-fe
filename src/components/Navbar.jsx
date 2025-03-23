import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constant';
import {removeUser} from '../utils/userSlice';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async() => {
    try {
      await axios.post(BASE_URL + '/logout', {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");

    } catch(err){
      console.error(err);
      // redirect to error page
    }
  }
    return(
        <>
        <div className="navbar bg-neutral text-neutral-content shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Mongo-Node</a>
  </div>
  {
    user &&
    <div className="flex gap-2 items-center">
      <div>Welcome {user.firstName} {user.lastName}, </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt=" Navbar component"
              src="https://picsum.photos/200/300/?blur" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between"> Profile
            </Link>
          </li>
          <li><a onClick={handleLogout}>Logout</a></li>
          <li><Link to="/profile/edit" className="justify-between">Edit Profile</Link></li>
        </ul>
      </div>
    </div>
  }
</div>
        </>
    )
}

export default Navbar;