import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
let initialState={
  message:{}
};

export const getGreetings = createAsyncThunk(

    'greeting/getGreetings',
    async()=>{
      
      console.log('response');
        const data =await fetch('/api/v1/greetings/random').then(response => {
       
              //console.log(response.json())
              return response.json();
          })
         return data;
    }
)

export const greetings=createSlice(
    {
      name:"greetings",
      initialState,
      reducers: {
        STOREGREETING(state,action){
          state.message=action.payload
            
        }
      },
      extraReducers: {
        [getGreetings.fulfilled]: (state, action) => {
        
          const details = action.payload;
          state.message=details;
        }, 
    }
  });

export const {STOREGREETING}= greetings.actions;

export default greetings.reducer;