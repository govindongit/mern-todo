import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div>
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
                  <h4>Add New User</h4>
                </div>
                <Link
                  to={"/"}
                  className="bg-success rounded text-center text-white px-2 py-1 text-decoration-none"
                >
                  Users List
                </Link>
                <form onSubmit={Submit}>
                  <div className="form-group mt-2">
                    <label> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name" required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email" required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label> Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Age" required
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 px-2 py-1"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
