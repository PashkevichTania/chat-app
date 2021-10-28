// Other code such as selectors can use the imported `RootState` type
import {RootState} from "redux/store";

export const usersSelector = (state: RootState) => state.user.user;