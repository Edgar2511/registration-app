import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  selectAuthState,
  setAllUsersDataAction,
  setAuthStatusAction,
} from "../../store/auth";
import React, { useEffect } from "react";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthStatusAction(false));
    localStorage.removeItem("user");
    localStorage.removeItem("usersData");

    navigate("/login");
  };

  const poxos = (petros: any): void => {
    console.log(petros);
  };
  //   poxos(petros="a");

  useEffect(() => {
    // const currentUser = JSON.parse(
    //   localStorage.getItem("user") ?? "{}"
    // ) as User;
    const usersData = JSON.parse(
      localStorage.getItem("usersData") ?? "[]"
    ) as User[];
    dispatch(setAllUsersDataAction(usersData));
    // const isAuth = usersData.some(
    //   ({ password, username }) =>
    //     username === currentUser.username && password === currentUser.password
    // );
    dispatch(setAuthStatusAction(true));
  }, []);

  return (
    <nav className="Navbar">
      <div className="navbar-left">
        {isAuth ? (
          <>
            <ul>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/albums">Albums</Link>
              </li>
              {/* <li>
                <Link onClick={handleLogout} to="login">
                  Log Out
                </Link>
              </li> */}
              <button onClick={handleLogout} className="logout-btn">
                Log out
              </button>
            </ul>
          </>
        ) : (
          <div className="navbar-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        {/* <Link to="/login">Log Out</Link> */}
      </div>
    </nav>
  );
};
