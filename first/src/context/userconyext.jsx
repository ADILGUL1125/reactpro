import React, { createContext, useState } from "react";
import { food_items } from "../components/card";
export const datacontext = createContext();
const Usercontext = ({ children }) => {
   let [cat,setcat]=useState(food_items)
    let [input,setinput]=useState("")
    let [showcart,setshowcart]=useState(false)
  let data = {
   input,setinput,cat,setcat,showcart,setshowcart
  };
  return (
    <div>
      <datacontext.Provider value={data}>{children}</datacontext.Provider>
    </div>
  );
};

export default Usercontext;
