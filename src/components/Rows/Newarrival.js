import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newarrivallist from "./Newarrivallist";
import Loading from "../Loading";
import Message from "../Message";
import { listproducts } from "../../redux/actions/actions";
import Axios from "axios";

export default function Newarrival() {
  const dispatch = useDispatch();
  const ourproduct = useSelector((state) => state.ourproduct);
  const { loading, error, bags } = ourproduct;
  useEffect(() => {
    dispatch(listproducts());
  }, [dispatch]);

  const [mobiles, setmobiles] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get(
        "https://fatafatsewa.herokuapp.com/api/mobiles"
      );
      setmobiles(data);
    };
    fetchdata();
  }, []);

  const [tools, settools] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get(
        "https://fatafatsewa.herokuapp.com/api/tools"
      );
      settools(data);
    };
    fetchdata();
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settingsm = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h2 className="rowtitles">New Arrivals</h2>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Slider {...settings} className="bags">
            {bags.map((product) => (
              <Newarrivallist
                key={product.id}
                product={product}
              ></Newarrivallist>
            ))}
          </Slider>
        )}
      </div>
      <div>
        <h2 className="rowtitles">Mobiles</h2>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Slider {...settingsm} className="mobiles">
            {mobiles.map((product) => (
              <Newarrivallist
                key={product.id}
                product={product}
              ></Newarrivallist>
            ))}
          </Slider>
        )}
      </div>
      <div>
        <h2 className="rowtitles">Tools</h2>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Slider {...settingsm} className="mobiles">
            {tools.map((product) => (
              <Newarrivallist
                key={product.id}
                product={product}
              ></Newarrivallist>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}
