import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUser/" + id)
      .then((result) => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch((err) => console.log(err))
     
  }, []) // <-- include id as a dependency if you use it in the effect


  const Update = (e) =>{
    e.preventDefault()
    axios
    .put("http://localhost:4000/updateUser/"+id, { name, email, age })
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div>
        <div>
        <div  className="bg-primary vh-100">
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
                  <h4>User Detail Update</h4>
                </div>
                <Link
                  to={"/"}
                  className="bg-success rounded text-center text-white px-2 py-1 text-decoration-none"
                >
                  Users List
                </Link>
           
            <form onSubmit={Update}>
              <div className="form-group mt-2">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Name"
                  value={name}   onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Age"
                  value={age}   onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary  mt-3 px-2 py-1">
                Update
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

export default UpdateUser;
