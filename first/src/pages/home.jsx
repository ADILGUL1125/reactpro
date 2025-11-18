import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import Nav from "../components/nav";
import Category from "../components/category";
import Card from "../components/card";
import { datacontext } from "../context/userconyext";
import Cartcard from "../components/cartcard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  let cartitems = useSelector((state) => state.cart);
  console.log(cartitems);
  let subtotal = cartitems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  console.log(subtotal);
  let deliveryfee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let grandtotal = Math.floor(subtotal + deliveryfee + taxes);
  let { cat, setcat, showcart, setshowcart } = useContext(datacontext);
  function filtercategory(category) {
    setcat(category);
  }

  return (
    <div className="w-full min-h-screen bg-slate-200">
      <Nav />
      <div className="flex items-center justify-center flex-wrap gap-4 w-[100%]">
        <Category onSelectCategory={filtercategory} />
      </div>
      <div className="w-full flex flex-wrap gap-5 justify-between items-center pt-5 pb-5">
        <Card selectedCategory={cat} />
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl flex items-center flex-col overflow-auto ${
          showcart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700`}
      >
        <header className="w-[100%] p-5 flex justify-between items-center">
          <span className="text-green-400 font-bold text-[18px]" >
            order items
          </span>
          <ImCross
            className="text-green-400 font-bold text-[18px] w-[20px] h-[20px] cursor-pointer "
            onClick={() => {
              setshowcart(false);
            }}
          />
        </header>
        {cartitems.length>0?<>
            <div className="w-full mt-9 flex flex-col gap-8">
              {cartitems.map((items) => (
                <Cartcard
                  name={items.name}
                  price={items.price}
                  image={items.image}
                  qty={items.qty}
                  id={items.id}
                />
              ))}
            </div>
            <div className="w-full border-t-2  border-b-2 border-gray-400 mt-5 flex flex-col gap-2 p-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-600">
                  subtotal
                </span>
                <span className="text-lg font-semibold text-green-600">
                  rs/={subtotal}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-600">
                  delivery fee
                </span>
                <span className="text-lg font-semibold text-green-600">
                  rs/={deliveryfee}
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-600">
                  taxes
                </span>
                <span className="text-lg font-semibold text-green-600">
                  rs/={taxes}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-5">
              <span className="text-2xl font-semibold text-gray-600">
                total
              </span>
              <span className="text-lg font-semibold text-green-600">
                rs/={grandtotal}
              </span>
            </div>
            <button className="w-[80%] flex justify-center bg-green-500 p-3 rounded-lg text-gray-700 hover:bg-green-400 cursor-pointer transition-all duration-500  text-white " onClick={()=>{
            toast.success("order placed succesfully ..");
          }}>
              place order
            </button>
          </>
        
         :
          <div className="text-2xl text-green-400 font-bold pt-10">
            empty card
          </div>
        }
      </div>
    </div>
  );
};

export default Home;
