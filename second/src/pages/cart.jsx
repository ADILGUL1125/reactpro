import React, { useState } from 'react'
import Cartcard from '../components/cart/cartcard'
import {useSelector} from "react-redux"
import ec from "../assets/emptycart.png"
const Cart = () => {
  let items = useSelector(state=>state)
 let total = items.cart.reduce((current,currentarrayprice)=>current+currentarrayprice.price,0)
  return (
    <div className='cart w-full min-h-[100vh] flex items-center justify-between flex-col   ' style={{paddingTop:"40px"}}>
{items?.cart?.length <= 0 ? <div className='emptycart w-[250px] h-[300px]  flex flex-col items-center justify-between '>
 <img src={ec} alt="" className='h-[200px] h-[200px]' />
 <h1 className='text-2xl font-bold'>emptycart</h1>
</div> : 
<>
<div className='cart-section w-[90%] flex flex-col gap-10'>
  {items.cart.map((item)=>(
    <Cartcard items ={item}/>
  ))}

</div>
<div className="price-section flex items-center flex-col justify-between  text-2xl">
  <span>total products :{items.cart.length}</span>
  <span>total amount :{total}/-</span>
</div>

</>

}



        

    </div>
  )
}

export default Cart