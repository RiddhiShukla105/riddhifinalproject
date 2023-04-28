import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import "./CardA.css";

const CardA = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <>
      <div className="card" style={{ borderRadius: "8%" }}>
        <img src="img/11992.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title" style={{ fontFamily: "PT Sans Narrow" }}>
            {props.title}
          </h3>

          <div
            className="card-text"
            style={{ color: "blue", marginTop: "3%", fontSize: "120%" }}
          >
            {props.desc}
          </div>

          <p {...getCollapseProps()}>{props.content}</p>
          <button
            className="btn btn-success"
            style={{ marginTop: "10%", marginBottom: "10%" }}
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>

          <p className="card-text"></p>
        </div>
      </div>
    </>
  );
};

export default CardA;

