import { createSlice } from "@reduxjs/toolkit";

export interface UserState{
    name: string;
}

export const userSlice = createSlice({
    name:'user',
    initialState:{
        name: "Darshan"
    },
    reducers:{
        updateName: (state, payload) => {
            console.log(payload);
            return state
        }
    }
})


export const {updateName} = userSlice.actions;
export default userSlice.reducer;