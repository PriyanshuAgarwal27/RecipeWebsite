import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'like',
    initialState: {
        items:["1","2"],
    },
    reducers:{
        addItems: (state,action) =>{
             state.items.push(action.payload);
        },
        removeItems:(state)=>{
            state.items.pop();
        },
        clearList: (state) =>{
            state.items.length = 0;
        },
    }
});
export const {addItems,removeItems,clearList} = userSlice.actions;
export default userSlice.reducer;