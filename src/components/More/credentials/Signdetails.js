import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

const Signdetails = () => {
  const [state, setState] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4004/sign-list")
      .then((res) => {
        setState(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [msg]);

  const deleteRecord = (id) => {
    axios.delete("http://localhost:4004/sign-list/" + id).then((res) => {
      console.log(res);
      setMsg(res.data.message);
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {msg ? (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alertdialog"
              >
                {msg}
              </div>
            ) : (
              ""
            )}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email Id</th>
                  <th scope="col">Password</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.f_name}</th>
                    <td>{item.f_email}</td>
                    <td>{item.f_pass}</td>
                    <td>
                      {/* <Link className='btn btn-success' to={`/edit-user/${item.id}`}>Edit</Link> */}
                      {/* &nbsp; */}
                      <input
                        type="submit"
                        value="Delete"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteRecord(item._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signdetails;
