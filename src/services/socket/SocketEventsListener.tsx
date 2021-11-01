import Socket from "services/socket/socket";
import {useDispatch} from "react-redux";
import {setMessages, setUserInRoom, setRoom} from "redux/roomReducer";
import {IMessage, IUser} from "interfaces";
import {useHistory} from "react-router-dom";

const SocketEventsListener = () => {

  const dispatch = useDispatch();
  const history = useHistory();


  Socket.socket.connect();
  console.log(Socket.socket);



  Socket.socket.on('roomCreated', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room);
    dispatch(setRoom(room));
    history.push('/chat')
  });

  Socket.socket.on('successfullyJoined', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room);
    dispatch(setRoom(room))
    history.push('/chat')
  });

  Socket.socket.on('userJoined', (args: {
    usersInRoom: string,
  }) => {
    const users:IUser[] = JSON.parse(args.usersInRoom);
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('userLeft', (args: {
    usersInRoom: string,
  }) => {
    const users:IUser[] = JSON.parse(args.usersInRoom);
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('userDisconnected', (args: {
    usersInRoom: string,
  }) => {
    const users:IUser[] = JSON.parse(args.usersInRoom);
    dispatch(setUserInRoom(users))
  });

  Socket.socket.on('messageSent', (args: {
    messages: string,
  }) => {
    const messages:IMessage[] = JSON.parse(args.messages);
    dispatch(setMessages(messages))
  });

  Socket.socket.on('roomDelete', (args: {}) => {
    console.log('roomdelete')
  });

  return null;
};

export default SocketEventsListener;