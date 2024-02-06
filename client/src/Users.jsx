import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <>
      <div className="bg-primary vh-100">
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-12 text-center">
            <div className="mt-5">
              <h2 className="text-white">
                CRUD Operation By Govind In MERN
              </h2>
            </div>
          </div>
          <div className="col-12 w-50 bg-white rounded p-3 mt-5">
            <div className="text-center">
              {" "}
              <h4>Total Users</h4>
            </div>
            <Link
              to={"/create"}
              className="bg-success rounded text-center text-white px-2 py-1 text-decoration-none"
            >
              + Add New User
            </Link>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>
                        <Link
                          to={`/update/${user._id}`}
                          className="bg-success rounded text-center text-white px-2 py-1 me-2 text-decoration-none"
                        >
                          Update
                        </Link>
                        <button
                          className="bg-danger text-center text-white px-2 py-1 rounded text-decoration-none"
                          onClick={(e) => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
