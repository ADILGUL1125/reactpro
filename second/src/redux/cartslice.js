import { createSlice } from "@reduxjs/toolkit";


const cartslice =createSlice({
    name:"cart",
     initialState: [],
       reducers:{
        additems:(state,action)=>{
            state.push(action.payload)
        },
        removeitems:(state,action)=>{
           return  state.filter((item)=>
                item.id !== action.payload
            )
        }
       }
})

export const {additems,removeitems}=cartslice.actions;
export default cartslice.reducer;