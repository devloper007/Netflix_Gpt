import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptSearchToggle: false
    },
    reducers:{
        addGptSearchToggle:(status) =>{
            status.gptSearchToggle = !status.gptSearchToggle;
        }
    }
});

export const { addGptSearchToggle } = gptSlice.actions;

export default gptSlice.reducer;