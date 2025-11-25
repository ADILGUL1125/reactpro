import React from "react";
import { FaShopify } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {
  // let dispatch = useDispatch()
  let sliceitem = useSelector((state) => state);
  console.log(sliceitem.cart);
  return (
    <div className="w-full max-w-[1550px] h-[150px] bg-gray-900 shadow-gray-600 shadow-sm">
      <div className="w-full h-[75%] flex items-center justify-between uppernav ">
        <Link to={"/"}>
          {" "}
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white ">
            <span>v-shop</span>
            <FaShopify />
          </div>
        </Link>

        <form
          className="w-[60%] h-[60%] bg-white sm:flex hidden items-center justify-center rounded-[20px] overflow-hidden"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="search items "
            className="w-[70%] h-full  outline-none border-none input text-[18px]"
          />
          <button className="w-[30%] h-full flex items-center justify-end text-2xl bg-white border-none button cursor-pointer *:cursor-pointer ">
            <FaSearch />
          </button>
        </form>
        <Link to={"/cart"}>
          <div className="cart-box text-white flex relative">
            <IoCartOutline className="w-10 h-10" />
            <span className=" absolute left-10 bottom-6 text-[18px]">
              {sliceitem.cart.length}
            </span>
          </div>
        </Link>
      </div>
      <div
        className="w-full h-[25%] bg-gray-700 bootom-nav flex items-center justify-center text-white list-none text-[18px] gap-5 font-semibold"
        style={{ cursor: "pointer" }}
      >
        <Link to={"/"}>
          {" "}
          <li>home</li>
        </Link>
        <Link to={"/shop"}>
          {" "}
          <li>shop</li>
        </Link>
        <Link to={"/cart"}>
          {" "}
          <li>cart</li>
        </Link>
        <Link to={"/contact"}>
          {" "}
          <li>contact</li>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
