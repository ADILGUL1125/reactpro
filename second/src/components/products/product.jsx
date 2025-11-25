import React from 'react'
import image1 from "../../assets/image1.jpg"
import {useDispatch} from "react-redux"
import { additems } from '../../redux/cartslice'


const Product = ({item}) => {
    let dispatch =useDispatch()
    // console.log(dummyproduct)
  return (
    <div key={item.id} className= 'product w-[300px] h-[450px] flex items-center justify-between flex-col  bg-white  rounded-2xl gap-20' style={{padding:"20px",boxShadow:"2px 2px 10px rgba(0,0,0,0.533" }}>
        <img src={item.image} alt="" className='w-[150px] h-[170px] shadow-2xl shadow-gray-900 rounded-2xl '  />
        <div className="product-detail flex items-start justify-start gap-2.5 text-lg flex-col ">
            <span className='name'>{item.name}</span>
            <span className='price'>rs: {item.price}/-</span>
            <button className='text-white rounded-2xl border-none text-lg hover:opacity-50 hover:transition-all delay-300 cursor-pointer    ' style={{padding:"10px 20px", background:"rgba(25,30,34"}} onClick={()=>{
                dispatch(additems(item))
            }}
                
            > add +</button>
        </div>
    </div>
  )
}

export default Product