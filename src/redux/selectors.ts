// Other code such as selectors can use the imported `RootState` type
import {RootState} from "redux/store";

export const userSelector = (state: RootState) => state.user.user;
export const authSelector = (state: RootState) => state.user.isAuth;
export const roomSelector = (state: RootState) => state.room.room;
export const messagesSelector = (state: RootState) => state.room.room.messages;
export const usersInRoomSelector = (state: RootState) => state.room.room.usersInRoom;
export const roomDataSelector = (state: RootState) => {
  return {
    admin: state.room.room.admin,
    id: state.room.room.id,
    roomName: state.room.room.roomName,
  }
};