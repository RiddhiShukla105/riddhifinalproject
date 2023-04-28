import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    f_name: "",
    f_email: "",
    f_pass: "",
    picture: "",
  });

  const [msg, setMsg] = useState();

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const saveData = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("f_name", state.f_name);
    formData.append("f_email", state.f_email);
    formData.append("f_pass", state.f_pass);
    formData.append("attach", state.picture);
    axios.post("http://localhost:4004/sign-list", formData).then((res) => {
      console.log(res);
      setMsg(res.data.message);
    });
    event.target.reset();
  };
  const uploadData = (event) => {
    console.log(event.target.files[0]);
    setState({ ...state, picture: event.target.files[0] });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="welcome">Sign Up !!</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="col-md-6 form">
                {msg ? (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{msg}</strong>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                ) : (
                  ""
                )}
                <form action="" onSubmit={saveData}>
                  <div className="row">
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      name="f_name"
                      id="name"
                      onChange={handler}
                      placeholder="Riddhi Shukla"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Email-id</label>
                    <input
                      type="email"
                      name="f_email"
                      id="email"
                      onChange={handler}
                      placeholder="shuklariddhi105@gmail.com"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="f_pass"
                      id="passowrd"
                      onChange={handler}
                      placeholder="12@34f"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Upload Picture</label>
                    <input
                      type="file"
                      name="file"
                      id="img"
                      onChange={uploadData}
                      placeholder="img"
                    />
                  </div>

                  <div className="row">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn btn-primary"
                      style={{
                        marginTop: "5%",
                        width: "60%",
                        marginLeft: "14%",
                        fontWeight: "700",
                      }}
                    />
                  </div>
                </form>
              </div>
              <div
                className="col-md-6 "
                style={{ backgroundImage: 'url("img/credentails.png")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
