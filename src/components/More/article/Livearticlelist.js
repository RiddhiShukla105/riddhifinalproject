import axios from "axios";
import React, { useEffect, useState } from "react";
import CardA from "./CardA";

const Livearticlelist = () => {
  const [alldata, allsetdata] = useState([]);
  // const [state,setState]=useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4004/article-list").then((res) => {
      allsetdata(res.data);
      console.log(res.data);
    });
  }, []);

  const getTotal = async () => {
    try {
      let response = await axios.get("http://localhost:4004/article-list");
      console.log(response);
      setTotal(Math.ceil(response.data.length / 2));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <>
      <h1
        style={{
          fontFamily: "Playfair Display",
          textAlign: "center",
          fontWeight: "700",
          color: "indigo",
          fontSize: "320%",
          marginTop: "5%",
          marginBottom: "4%",
        }}
      >
        Read Our Latest Articles Here!!
      </h1>
      <div className="container" style={{ marginTop: "3%" }}>
        <div className="row">
          <div className="row" style={{ textAlign: "center" }}>
            {alldata.map((item, index) => (
              <div
                className="col-md-4"
                key={item.id}
                style={{ textAlign: "center" }}
              >
                <CardA
                  title={item.ftopic}
                  desc={item.fdesc}
                  content={item.farticle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Livearticlelist;
