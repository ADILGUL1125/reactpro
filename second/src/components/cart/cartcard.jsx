import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux';
import { removeitems } from '../../redux/cartslice';

const Cartcard = ({items}) => {
  let dispatch =useDispatch()
  
  return (
    <div  className='cartcard h-[180px]   items-center justify-between rounded-2xl flex'style={{padding:"20px",boxShadow:"2px 2px 10px black  "}}
      
    >

      <div className="leftcard flex items-center justify-center gap-5 h-full ">
      <img src={items.image} alt=""  className='max-w-[50%] md:h-full h-[100px]'/>
      <div className="name-price flex flex-col gap-2.5 text-lg">
        <span>{items.name}</span>
        <span>rs :{items.price}/-</span>
      </div>
      </div>
      <div className="rightcard   ">
        <button className='bg-red-500 flex items-center text-[10px] text-white md:text-xl gap-2 rounded-lg border-none cursor-pointer hover:opacity-80' style={{padding:"10px 20px"}} onClick={()=>{
          console.log(items.id)
          dispatch(removeitems(items.id))
        }}>remove
        <RiDeleteBin6Fill />

        </button>



      </div>
    </div>
  )
}

export default Cartcard