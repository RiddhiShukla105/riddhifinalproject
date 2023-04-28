import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./blue-circle.gif";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = (props) => {
  const logout = () => {
    localStorage.removeItem("_token");
    navigate("/");
  };

  const navigate = useNavigate();
  const textInput = useRef(null);

  const searchNews = (event) => {
    event.preventDefault();
    let searchQueryValue =
      textInput.current.value === "" ||
      textInput.current.value === " " ||
      textInput.current.value === null ||
      textInput.current.value === undefined
        ? "*"
        : textInput.current.value;
    props.setSearchQuery(searchQueryValue);
    navigate("/search");
  };

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="45"
              height="30"
              className="me-2 align-text-center"
            />
            Final Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                size="50"
                placeholder="Search for news with keyword"
                aria-label="Search"
                ref={textInput}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={searchNews}
              >
                Find
              </button>
            </form>
            <ul className="navbar-nav ms-auto w-100 justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/economics">
                  Economics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/travel">
                  Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article">
                  Write
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/article-list">
                  Articles
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Credentials
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/sign-list">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="loginn">
                      Login
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <input
                      type="submit"
                      value="Logout"
                      onClick={logout}
                      className="btn btn-primary"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
