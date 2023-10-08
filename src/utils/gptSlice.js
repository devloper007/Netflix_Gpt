import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptSearchToggle: false,
        gptResults: null
    },
    reducers:{
        addGptSearchToggle:(status) =>{
            status.gptSearchToggle = !status.gptSearchToggle;
        },
        addGptResults: (status, action) =>{
            console.log('action',action.payload);
            status.gptResults = action.payload;
        }
    }
});

export const { addGptSearchToggle, addGptResults } = gptSlice.actions;

export default gptSlice.reducer;