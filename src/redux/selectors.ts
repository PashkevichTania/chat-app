// Other code such as selectors can use the imported `RootState` type
import {RootState} from "redux/store";

export const userSelector = (state: RootState) => state.user.user;
export const roomSelector = (state: RootState) => state.room.room;
export const messagesSelector = (state: RootState) => state.room.room.messages;
export const usersInRoomSelector = (state: RootState) => state.room.room.usersInRoom;