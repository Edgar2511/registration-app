import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  selectCurrentUser,
  setCurrentUserAction,
  setCurrentUsersDataAction,
  //   setAllUsersDataAction,
} from "../../../store/auth";
import React from "react";

export const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const handleInputChange = (name: keyof User, value: string) => {
    dispatch(setCurrentUserAction({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setCurrentUsersDataAction());

    handleInputChange("username", "");
    handleInputChange("password", "");

    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-page-wrapper">
        <div className="signup-page-title">Sign Up</div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={currentUser.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
            <input
              name="password"
              type="text"
              placeholder="Password"
              value={currentUser.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <div>
              {/* <Link to={"/login"} type="submit" onClick={handleSubmit}>
                Sign Up
              </Link> */}
              <button type="submit">clickkk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
