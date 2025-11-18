import React, { useContext, useMemo, useState } from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

// import {use} from

import image1 from "../assets/image1.avif";
// import image1 from "./assets/image1.avif";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.avif";
import image6 from "../assets/image6.avif";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.avif";
import image9 from "../assets/image9.avif";
import image10 from "../assets/image10.avif";
import image11 from "../assets/image11.avif";
import image12 from "../assets/image12.avif";
import image13 from "../assets/image13.avif";
import image14 from "../assets/image14.webp";
import image15 from "../assets/image15.avif";
import image16 from "../assets/image16.avif";
import image17 from "../assets/image17.avif";
import image18 from "../assets/image18.avif";
import image19 from "../assets/image19.avif";
import image20 from "../assets/image20.avif";
import image21 from "../assets/image21.avif";
import image22 from "../assets/image22.avif";
import image23 from "../assets/image23.avif";
import image24 from "../assets/image24.avif";
import image25 from "../assets/image25.avif";
import { datacontext } from "../context/userconyext";
import { additems } from "../redux/cartslice";
export const food_items = [
  {
    id: 1,
    food_name: "Pancakes",
    food_category: "breakfast",
    food_type: "veg",
    food_quantity: 1,
    food_image: image1,
    price: 499,
  },
  {
    id: 2,
    food_name: "Chicken Soup",
    food_category: "soups",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image2,
    price: 399,
  },
  {
    id: 3,
    food_name: "Minestrone Soup",
    food_category: "soups",
    food_type: "veg",
    food_quantity: 1,
    food_image: image3,
    price: 349,
  },
  {
    id: 4,
    food_name: "Spaghetti Carbonara",
    food_category: "pasta",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image4,
    price: 999,
  },
  {
    id: 5,
    food_name: "Veg Alfredo Pasta",
    food_category: "pasta",
    food_type: "veg",
    food_quantity: 1,
    food_image: image5,
    price: 899,
  },
  {
    id: 6,
    food_name: "Chicken Alfredo Pasta",
    food_category: "pasta",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image6,
    price: 1099,
  },
  {
    id: 7,
    food_name: "Paneer Butter Masala",
    food_category: "main_course",
    food_type: "veg",
    food_quantity: 1,
    food_image: image7,
    price: 799,
  },
  {
    id: 8,
    food_name: "Chicken Biryani",
    food_category: "main_course",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image8,
    price: 1199,
  },
  {
    id: 9,
    food_name: "Margherita Pizza",
    food_category: "pizza",
    food_type: "veg",
    food_quantity: 1,
    food_image: image9,
    price: 649,
  },
  {
    id: 10,
    food_name: "Pepperoni Pizza",
    food_category: "pizza",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image10,
    price: 749,
  },
  {
    id: 11,
    food_name: "Veggie Burger",
    food_category: "burger",
    food_type: "veg",
    food_quantity: 1,
    food_image: image11,
    price: 499,
  },
  {
    id: 12,
    food_name: "Chicken Burger",
    food_category: "burger",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image12,
    price: 599,
  },
  {
    id: 13,
    food_name: "Tomato Soup",
    food_category: "soups",
    food_type: "veg",
    food_quantity: 1,
    food_image: image13,
    price: 299,
  },
  {
    id: 14,
    food_name: "Egg Sandwich",
    food_category: "breakfast",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image14,
    price: 349,
  },
  {
    id: 15,
    food_name: "Mushroom Soup",
    food_category: "soups",
    food_type: "veg",
    food_quantity: 1,
    food_image: image15,
    price: 349,
  },
  {
    id: 16,
    food_name: "Chicken Tikka Masala",
    food_category: "main_course",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image16,
    price: 1199,
  },
  {
    id: 17,
    food_name: "Cheese Omelette",
    food_category: "breakfast",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image17,
    price: 399,
  },
  {
    id: 18,
    food_name: "Fettuccine Alfredo",
    food_category: "pasta",
    food_type: "veg",
    food_quantity: 1,
    food_image: image18,
    price: 949,
  },
  {
    id: 19,
    food_name: "Garlic Bread",
    food_category: "pizza",
    food_type: "veg",
    food_quantity: 1,
    food_image: image19,
    price: 299,
  },
  {
    id: 20,
    food_name: "Fish and Chips",
    food_category: "main_course",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image20,
    price: 1099,
  },
  {
    id: 21,
    food_name: "Hash Browns",
    food_category: "breakfast",
    food_type: "veg",
    food_quantity: 1,
    food_image: image21,
    price: 249,
  },
  {
    id: 22,
    food_name: "Vegetable Soup",
    food_category: "soups",
    food_type: "veg",
    food_quantity: 1,
    food_image: image22,
    price: 329,
  },
  {
    id: 23,
    food_name: "Egg Fried Rice",
    food_category: "main_course",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image23,
    price: 599,
  },
  {
    id: 24,
    food_name: "Hawaiian Pizza",
    food_category: "pizza",
    food_type: "non_veg",
    food_quantity: 1,
    food_image: image24,
    price: 799,
  },
  {
    id: 25,
    food_name: "Pasta Primavera",
    food_category: "pasta",
    food_type: "veg",
    food_quantity: 1,
    food_image: image25,
    price: 899,
  },
];
const Card = ({ selectedCategory }) => {
  let dispatch = useDispatch();
  let { cat, showcart, setshowcart } = useContext(datacontext);

  console.log(cat);

  let filteredItems =
    selectedCategory === "all"
      ? food_items
      : food_items.filter((item) => item.food_category === selectedCategory);
  // useState(()=>{
  //  filteredItems
  // })

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center px-3">
      {filteredItems.map((items) => (
        <div className=" w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400">
          <div className="w-[100%] h-[60%] overflow-hidden rounded-lg ">
            <img src={items.food_image} alt="" className="object-cover " />
          </div>
          <div className="text-2xl font-semibold">
            <p>{items.food_name}</p>
          </div>
          <div className="w-[100%] flex justify-between items-center">
            <div className="text-lg font-bold text-green-500">
              {`${items.price}/-`}
            </div>
            <div className="flex justify-center items-center gap-2 text-lg text-green-500 font-semibold">
              {items.food_type == "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

              <span>{items.food_type}</span>
            </div>
          </div>
          <button
            className="w-full bg-green-500 p-3 rounded-lg text-gray-700 hover:bg-green-400 cursor-pointer transition-all duration-500  text-white font-bold"
            onClick={() => {
              dispatch(
                additems({
                  id: items.id,
                  name: items.food_name,
                  price: items.price,
                  image: items.food_image,
                  qty: 1,
                })
              );
              toast.success("item added succesfully");
            }}
          >
            add to dish
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
