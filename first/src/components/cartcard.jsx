import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import image1 from "../assets/image1.avif";
import { useDispatch } from "react-redux";

import { decrementqty, incrementqty, removeitems } from "../redux/cartslice";

const Cartcard = ({name, id, image,price,qty}) => {
  let dispatch=useDispatch()
  
  return (
    <div className="w-full  h-[120px] p-2 flex justify-between items-center shadow-lg " key={id}>
      <div className="w-[70%] h-full  flex gap-5 ">
        <div className="w-[60%] h-full overflow-hidden rounded-lg bg-red-800">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div  className=" w-[30%] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-bold">{name}</div>
          <div className="w-[110px] h-[50px]  flex rounded-lg overflow-hidden shadow-lg  border-1 border-green-400 font-bold text-xl">
            <button className="w-[30%] h-full bg-white flex items-center justify-center text-green-400 hover:bg-gray-100"onClick={()=>{ qty>1 && dispatch(decrementqty(id))}} >-</button>
            <span className="w-[40%] h-full bg-slate-200 flex items-center justify-center text-green-400">{qty}</span>
            <button className="w-[30%] h-full bg-white flex items-center justify-center text-green-400 hover:bg-gray-100" onClick={()=>{dispatch(incrementqty(id))}}>+</button>
          </div>
        </div>
      </div>
      <div className="flex items-end flex-col gap-6">
        <span className="text-bold text-xl text-green-400"> {price}</span>
        <RiDeleteBin3Line className=" w-[30px] h-[30px] text-bold text-xl text-red-400 cursor-pointer"  onClick={()=>dispatch(removeitems(id))}/>
      </div>
    </div>
  );
};

export default Cartcard;
