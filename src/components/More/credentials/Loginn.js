import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginn = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const _useNavigate = useNavigate();
  const handler = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };
  const loginNow = (event) => {
    event.preventDefault();
    console.log(login);
    axios
      .post("http://localhost:4004/logindata", login)
      .then((res) => {
        console.log(res);
        if (res.data.err === 0) {
          localStorage.setItem("_token", res.data.token);
          _useNavigate("/article");
        }
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="welcome">Welcome Back </div>
          <div className="col-md-12" style={{ marginTop: "5%" }}>
            <div className="row">
              <div className="col-md-6">
                <form action="" onSubmit={loginNow}>
                  <div className="row">
                    <label htmlFor="">Email-id</label>
                    <input
                      type="email"
                      name="username"
                      id="email"
                      onChange={handler}
                      placeholder="shuklariddhi105@gmail.com"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="passowrd"
                      onChange={handler}
                      placeholder="12@34f"
                    />
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      value="Login"
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
              <div className="col-md-6">
                <img
                  src="img/newsRead.webp"
                  alt=""
                  srcset=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginn;
