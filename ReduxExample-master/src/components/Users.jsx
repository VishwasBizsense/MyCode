import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, getUserById, getUsersList } from "../actions/users";
import { postNewUser, putUserInfo } from "../actions/users";
import "./styles.css";

const Users = () => {
  const [formData, setFormData] = useState({ name: "", job: "Leader" });

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);
  const list = useSelector((state) => state.users.list);

  const userDetails = useSelector((state) => state.users.userDetails);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  function getUserData(userId) {
    dispatch(getUserById(userId));
  }

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserById(userId));
  };

  // console.log('userDetails: ',userDetails)

  //Handle post methods

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewUser(formData));
    console.log(formData);
  };

  //Edit user info

  const handleEditUser = (item) => {
    const userId = item.id;
    const putData = {
      name: `${item.first_name} ${item.last_name}`,
      email: `${item.first_name}.${item.last_name}@gmail.com`,
      job: formData.job,
    };
    dispatch(putUserInfo(userId, putData));
  };

  //handling patch request

  const handlePatchUser = (item) => {
    const userId = item.id;
    const patchData = {
      name: `${item.first_name} ${item.last_name} - Patched`,
      email: `${item.first_name}.${item.last_name}@gmail.com`,
      job: formData.job,
    };
    dispatch(putUserInfo(userId, patchData));
  };

  return (
    <>
      <div>
        <h1>Users</h1>
        {loading && <div>Loading ...</div>}
        {!loading && list && (
          <div>
            {list.map((item, i) => (
              <div key={i} className="row" onClick={() => getUserData(item.id)}>
                <div className="cell">
                  <img className="avatar" src={item.avatar} />
                </div>
                <div className="cell">
                  {item.first_name} {item.last_name}
                </div>
                <div className="cell">{item.email}</div>
                <button onClick={() => handleDeleteUser(item.id)}>
                  Delete
                </button>
                <button onClick={() => handleEditUser(item)}>Edit (PUT)</button>
                <button className="Patch" onClick={() => handlePatchUser(item)}>
                  Edit (PATCH)
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name..."
            />
          </div>
          <div>
            <input
              type="text"
              value={formData.job}
              onChange={(e) =>
                setFormData({ ...formData, job: e.target.value })
              }
              placeholder="Enter your job title..."
            />
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default Users;
