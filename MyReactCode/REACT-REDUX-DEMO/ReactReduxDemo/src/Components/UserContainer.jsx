/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    error
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

export default UserContainer;
