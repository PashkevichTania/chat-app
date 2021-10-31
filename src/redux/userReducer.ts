import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user:{
    displayName: 'test',
    email: 'test',
    photoURL: 'test',
    uid: 'test',
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer