export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
}

export interface IRoom {
  id: string,
  roomName: string,
  usersInRoom: IUser[],
  admin: IUser,
  messages: IMessage[]
}

export interface IMessage {
  user: IUser,
  text: string,
}