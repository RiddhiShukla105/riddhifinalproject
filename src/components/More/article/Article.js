import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [state, setState] = useState({
    ftopic: "",
    farticle: "",
  });
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (localStorage.getItem("_token")) {
    } else {
      navigate("/loginn");
    }
  }, []);
  const saveData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4004/articles", state)
      .then((res) => {
        console.log(res);
        setMsg({ msg: "Article submitted successfully." });
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="container"
        align="center"
        style={{
          backgroundImage: "url('img/article_writing.jpg')",
          marginTop: "5%",
        }}
      >
        <div className="row">
          <div
            className="heading"
            style={{
              textTransform: "uppercase",
              fontSize: "36px",
              fontFamily: "cursive",
              fontWeight: "600",
              marginTop: "2%",
              marginBottom: "0.5%",
              marginLeft: "-2.5%",
              color: "whitesmoke",
            }}
          >
            Write your article here
          </div>
        </div>
        {msg ? <div className="alert alert-success">{msg}</div> : ""}
        <form action="" onSubmit={saveData}>
          <div className="col-md-12 col-sm-12">
            <div className="row">
              <div className="row">
                <div className="col-md-12 col-sm-12 my-3">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Topic"
                    name="ftopic"
                    onChange={handler}
                    aria-label="First name"
                    style={{
                      width: "65%",
                      marginBottom: "0.6%",
                      marginLeft: "-7%",
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Description"
                    name="fdesc"
                    onChange={handler}
                    aria-label="First name"
                    style={{
                      width: "65%",
                      marginBottom: "2%",
                      marginLeft: "-7%",
                    }}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12  col-sm-12 ">
                  <textarea
                    name="farticle"
                    id=""
                    minlength="5000"
                    maxlength="7000"
                    onChange={handler}
                    placeholder="Write your article here...      
                   (Kindly note that minlength is 5000 and maxlength is 7000)"
                    style={{ width: "90%", height: "60vh" }}
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary mx-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Article;
