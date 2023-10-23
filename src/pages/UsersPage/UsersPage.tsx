import "./UsersPage.css";
import { User, userService } from "../../api/Services/UserService";
import { useCallback, useEffect, useState } from "react";

export const Users = () => {
  //   const [users, setUsers] = useState<User[]>();

  //   const handleGetAllUsers = async () => {
  //     try {
  //       const users = await userService.getAllUsers();
  //       setUsers(users);
  //     } catch (error) {}
  //   };

  const [users, setUsers] = useState<User[]>();

  const fetchData = useCallback(async () => {
    try {
      const usersData = await userService.getAllUsers();
      setUsers(usersData);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="users-data-container">
      <div className="users-title">Our Users Ranking</div>
      {users?.map((user) => {
        return (
          <div className="user-card" key={user.id}>
            <div className="user-container">
              <h3 className="user-number">№{user.id}</h3>
              <h2>Name: {user.name}</h2>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};
