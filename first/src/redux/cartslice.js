import { createSlice } from "@reduxjs/toolkit";
const cartslice =createSlice({
name:"cart",
initialState:[],
reducers:{
    additems:(state,action)=>{
      let exisitem =  state.find((item)=>item.id === action.payload.id)
      if(exisitem){
       return state.map((item)=>(item.id ===action.payload.id?{...item,qty:item.qty+1}:item))
      }else{

          state.push(action.payload)
      }
    },
    removeitems:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload)
    },
    incrementqty:(state,action)=>{
         return state.map((item)=>(item.id ===action.payload?{...item,qty:item.qty+1}:item))
    }, decrementqty:(state,action)=>{
        
         return state.map((item)=>(item.id ===action.payload?{...item,qty:item.qty-1}:item))
    }
    
    
}
})

export const {additems,removeitems,incrementqty,decrementqty}=cartslice.actions;
export default cartslice.reducer;