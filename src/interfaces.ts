export interface IUser {
  displayName: string,
  email: string,
  photoURL: string,
  uid: string,
}

export interface IRoom {
  id: string,
  roomName: string,
  usersInRoom: IUser[],
  admin: IUser,
  messages: IMessage[]
}

export interface IMessage {
  socketID: string,
  user: IUser,
  text: string,
  date: string
}