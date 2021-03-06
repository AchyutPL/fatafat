import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
export default function Searchscreen(props) {
  const term = props.match.params.term;

  const [ourdata, setourdata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get(
        `https://fatafatsewa.herokuapp.com/api/search/${term}`
      );
      setourdata(data);
    };
    fetchdata();
  }, [term]);

  return (
    <>
      <h3 style={{ margin: "25px 30px" }}>Search results for {term}...</h3>
      <div className="letsmap">
        {ourdata.map((data) => (
          <div className="allsearch">
            <Link to={`/product/${data._id}`}>
              <img src={data.path} alt="" />
            </Link>
            <div className="name">{data.productname}</div>
            <div className="price">Price : {data.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
