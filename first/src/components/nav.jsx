import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import  {  datacontext  } from '../context/userconyext';
import { food_items } from './card';
import { useSelector } from 'react-redux';




const Nav = () => {
  // console.log(food_items)

    let {input,setinput,setcat,cat,showcart,setshowcart}=useContext( datacontext )
    useEffect(()=>{
      let newitem=food_items.filter((items)=>items.food_name.toLowerCase().includes(input.toLowerCase()))
      setcat(newitem)
    },[input])
     let cartitems=useSelector(state=>state.cart)
     console.log(cartitems)
    
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood  className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md md:w-[70%] shadow-xl' onSubmit={(e)=>e.preventDefault()}>
            <IoSearch className='text-green-500 w-[20px] h-[20px]  ' />

            <input type="text" placeholder=' searc foood here ...' className='w-[100%] outline-none text-[16px] md:text-[20px]'onChange={(e)=>setinput(e.target.value)} value={input}  />

        </form>
         <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative' onClick={()=>{setshowcart(true)}}>
            <span className='absolute top-0 right-2 text-green-500 font-bold'>{cartitems.length}</span>
           <FiShoppingBag className='w-[30px] h-[30px] text-green-500 cursor-pointer'/>

        </div>
    </div>
  )
}

export default Nav