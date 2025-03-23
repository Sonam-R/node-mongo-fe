import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    addProfile: (state, action) => {
      return action.payload;
    },
    removeProfile: (state, action) => null,
  },
});

export const {addProfile, removeProfile} =  profileSlice.actions;
export default profileSlice.reducer;
