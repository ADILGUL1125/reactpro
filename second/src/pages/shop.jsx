import React, { useState } from 'react'
import { category } from '../category.js'
import { dummydata } from '../dummydata.js';
import Product from '../components/products/product.jsx';
import { FaShopify } from "react-icons/fa6";

const Shop = () => {
     let [cate, setcate] = useState(dummydata);
      let filterproduct = (category) => {
        if(category == "all"){
            setcate(dummydata)
        }else{

            let updatecate = dummydata.filter((item) => item.category === category);
            setcate(updatecate);
        }
      };
  return (

    <div className='shop w-full min-h-[100vh]'>
        <div className="heading  font-extrabold text-4xl flex  w-full h-[100px] gap-2.5 items-center justify-center">
            <span>shop</span>
             <FaShopify/>
        </div>
         <div
                className="cat-section flex items-center justify-center gap-5 w-full flex-wrap  "
                style={{ "margin-top": "60px" }}
              >
                {category.map((item) => (
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
              <div
        className="product-section flex flex-wrap items-center justify-between  gap-5 "
        style={{ padding: "20px" }}
      >
        {cate.map((item) => (
          <Product item={item} />
        ))}
      </div>
    
    </div>
  )
}

export default Shop