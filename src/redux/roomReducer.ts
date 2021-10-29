import {createSlice} from "@reduxjs/toolkit";
import {IMessage, IRoom, IUser} from "interfaces";

const initialState:{room: IRoom} = {
  room:{
    id: 'test',
    roomName: 'test',
    usersInRoom: [],
    admin: {
        firstName: 'test',
        lastName: 'test',
        email: 'test',
    },
    messages: []
  }
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state, action:{payload: IRoom, type: string}) => {
      state.room = action.payload
    },
    setMessages: (state, action:{payload: IMessage[], type: string}) => {
      state.room.messages = action.payload
    },
    setUserInRoom: (state, action:{payload: IUser[], type: string}) => {
      state.room.usersInRoom = action.payload
    },
  },
})

export const {setRoom, setMessages, setUserInRoom} = roomSlice.actions

export default roomSlice.reducer