import Socket from "services/socket/socket";
import {useDispatch} from "react-redux";
import {setMessages, setUserInRoom, setRoom} from "redux/roomReducer";
import {IMessage, IUser} from "interfaces";

const SocketEventsListener = () => {

  const dispatch = useDispatch()


  Socket.socket.connect();
  console.log(Socket.socket);


  const reviver = (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }

  Socket.socket.on('roomCreated', (args: {
    description: string,
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('room created', room);
    dispatch(setRoom(room));
  });

  Socket.socket.on('successfullyJoined', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('successfullyJoined', room);
    dispatch(setRoom(room))
  });

  Socket.socket.on('userJoined', (args: {
    usersInRoom: string,
  }) => {
    const usersInRoom:Map<string, IUser> = JSON.parse(args.usersInRoom, reviver);
    const users = Array.from(usersInRoom.values())
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('userLeft', (args: {
    usersInRoom: string,
  }) => {
    const usersInRoom:Map<string, IUser> = JSON.parse(args.usersInRoom, reviver);
    const users = Array.from(usersInRoom.values())
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('userDisconnected', (args: {
    usersInRoom: string,
  }) => {
    const usersInRoom:Map<string, IUser> = JSON.parse(args.usersInRoom, reviver);
    const users = Array.from(usersInRoom.values())
    console.log('userDisconected')
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('messageSent', (args: {
    messages: string,
  }) => {
    const messages:IMessage[] = JSON.parse(args.messages);
    console.log('messageSent', messages);
    dispatch(setMessages(messages))
  });

  Socket.socket.on('roomDelete', (args: {}) => {
    console.log('roomdelete')
  });

  return null;
};

export default SocketEventsListener;