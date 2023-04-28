import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const steps = [
    {
      id: "Greet",
      message: "Welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please Enter Your Name",
      trigger: "Waiting1",
    },
    {
      id: "Waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue},Please select you issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        {
          value: "Angular",
          label: "Angular",
          trigger: "Angular",
        },
        {
          value: "Article",
          label: "Article",
          trigger: "Article",
        },
        {
          value: "News",
          label: "News",
          trigger: "News",
        },
      ],
    },
    {
      id: "React",
      component: (
        <div>
          {" "}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AeojRYwfAMo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "Angular",
      message: "Thanks for telling your angular issue",
      trigger: "other",
    },
    {
      id: "Article",
      component: (
        <div>
          <p>You need to login first to write your own artcile.</p>
          <p>Click on this image it will direct you to login page</p>
          <Link to="/login">
            <img
              src="img/newspaper.png"
              alt=""
              srcset=""
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "News",
      component: (
        <div>
          <p>You can see the news by clicking on image</p>
          <Link to="/">
            <img
              src="img/monkey_reading_news.webp"
              alt=""
              srcset=""
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "other",
      options: [
        {
          value: "positive",
          label: "Continue",
          trigger: "true",
        },
        {
          value: "negative",
          label: "End",
          trigger: "false",
        },
      ],
    },
    {
      id: "true",
      message: "What issue you have",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "React",
          label: "React",
          trigger: "React",
        },
        {
          value: "Angular",
          label: "Angular",
          trigger: "Angular",
        },
        {
          value: "Article",
          label: "Article",
          trigger: "Article",
        },
        {
          value: "News",
          label: "News",
          trigger: "News",
        },
      ],
    },
    {
      id: "React",
      component: (
        <div>
          {" "}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AeojRYwfAMo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "Angular",
      message: "Thanks for telling your angular issue",
      trigger: "other",
    },
    {
      id: "Article",
      component: (
        <div>
          <p>You need to login first to write your own artcile.</p>
          <p>Click on this image it will direct you to login page</p>
          <Link to="/login">
            <img
              src="img/newspaper.png"
              alt=""
              srcset=""
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "News",
      component: (
        <div>
          <p>You can see the news by clicking on image</p>
          <Link to="/">
            <img
              src="img/monkey_reading_news.webp"
              alt=""
              srcset=""
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      ),
      trigger: "other",
    },
    {
      id: "false",
      message: "So close me now!!",
      end: true,
    },
  ];
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        ChatBot
      </button>

      {/* <!-- The Modal --> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">ChatBot</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <Segment floated="right">
                <ChatBot steps={steps} recognitionEnable={true} />
              </Segment>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
