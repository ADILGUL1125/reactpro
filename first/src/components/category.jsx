import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";

import React from "react";

const Categery = ({onSelectCategory}) => {
  const category = [
    {
      id: 1,
      name: "all",
      Image: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 2,
      name: "breakfast",
      Image: (
        <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
      ),
    },
    {
      id: 3,
      name: "soups",
      Image: <TbSoup className="w-[60px] h-[60px] text-green-600" />,
    },

    {
      id: 4,
      name: "pasta",
      Image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 5,
      name: "main_course",
      Image: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 6,
      name: "pizza",
      Image: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
    },
    {
      id: 7,
      name: "burger",
      Image: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
    },
  ];

  return (
    <>
      {category.map((items) => (
        <div key={items.id} className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-[20px] p-5 font-bold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-80" onClick={()=>onSelectCategory(items.name)}>
            
          {items.Image}
          {items.name}
        </div>
      ))}
    </>
  );
};

export default Categery;
