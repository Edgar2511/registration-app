import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  selectAllUsers,
  selectCurrentUser,
  setAuthStatusAction,
  setCurrentUserAction,
} from "../../../store/auth";
import React from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const usersData = useSelector(selectAllUsers);
  const navigate = useNavigate();

  const handleInputChange = (name: keyof User, value: string) => {
    dispatch(setCurrentUserAction({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isUserAuth = usersData.some(
      (user) =>
        user.username === currentUser.username &&
        user.password === currentUser.password
    );

    if (isUserAuth) {
      dispatch(setAuthStatusAction(true));

      //   interface axperner {
      //     isAuth: boolean;
      //   }

      //   const edo = (isAuth: isUserAuth) => {};
      //   poxos({ isAuth: false });

      //   const bratva = ["edo", "garik", "serg"] as const;

      //   interface FlanTypes {
      //     Arsen: "Sergo";
      //   }
      //   interface FstanTypes {
      //     axperner: typeof bratva;
      //   }

      //   const edo = (flan: FlanTypes, fstan: FstanTypes) => {
      //     console.log(flan, fstan);
      //   };
      //   edo({ Arsen: "Sergo" }, { axperner });

      localStorage.setItem("user", JSON.stringify(currentUser));

      console.log("Login Successful");
      console.log(usersData);
      navigate("/users");
    } else {
      console.log("Invalid username or password. Please try again.");
    }

    handleInputChange("username", "");
    handleInputChange("password", "");
  };

  return (
    <div className="login-page">
      <div className="login-page-wrapper">
        <div className="login-page-title">Welcome To Our Page</div>
        <div className="login-form">
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
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <p>
          Already have an account,<Link to={"/signup"}>sign up</Link>
        </p>
      </div>
    </div>
  );
};
