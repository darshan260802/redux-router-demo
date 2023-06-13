import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Darshan",
  },
  reducers: {
    updateName: (state, action) => {
      const { payload } = action;
      console.log(payload);

      return {...state, name: payload}
    },
    
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
