import React, { useState } from "react";
import Nav from "../../components/nav/nav";
import bg from "../../assets/bg0.gif";
import { category } from "../../category.js";
import Product from "../../components/products/product.jsx";
import { dummydata } from "../../dummydata.js";
import {useDispatch} from "react-redux"

const Home = () => {
   let dispatch = useDispatch()
  let [cate, setcate] = useState(dummydata);
  let filterproduct = (category) => {
    let updatecate = dummydata.filter((item) => item.category === category);
    setcate(updatecate);
  };
  return (
    <div>
      <div
        className="hero-bg w-full flex items-center  justify-center "
        style={{ "margin-top": "10px" }}
      >
        <img
          src={bg}
          alt=""
          srcset=""
          className="w-[90%] shadow-lg rounded-2xl "
        />
      </div>
      <div
        className="cat-section flex items-center justify-center gap-5 w-full flex-wrap  "
        style={{ "margin-top": "60px" }}
      >
        {category.slice(0, 5).map((item) => (
          <div
            className="  category-card w-[100px] h-[150px]  md:w-[200px] md:h-[250px] flex items-center justify-center flex-col gap-2.5 hover:shadow-xl rounded-[20px]  ursor-pointer transition-all duration-500 "
            style={{ cursor: "pointer" }} onClick={()=>{
              filterproduct(item.name)
            }}
          >
            <img src={item.image} alt="" className="w-full" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <h1
        className="text-center text-3xl font-extrabold"
        style={{ "margin-top": "20px", padding: "40px" }}
      >
        trending products
      </h1>
      <div
        className="product-section flex flex-wrap items-center justify-between  gap-5 "
        style={{ padding: "20px" }}
      >
        {cate.slice(0, 7).map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
