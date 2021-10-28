import Socket from "services/socket/socket";

const SocketEventsListener = () => {


  Socket.socket.connect();
  console.log(Socket.socket);

  console.log("ENV ", process.env.REACT_APP_DOMAIN)

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
    console.log('successfullyJoined', args, room);
    console.log('room created', room);

  });

  Socket.socket.on('successfullyJoined', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('successfullyJoined', room);

  });

  Socket.socket.on('userJoined', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('userJoined', room);
  });

  Socket.socket.on('userLeft', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('userleft', room);
  });

  Socket.socket.on('userDisconnected', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    room.usersInRoom = Array.from(room.usersInRoom)
    console.log('userdisc',room);
  });

  Socket.socket.on('messageSent', (args: {
    room: string,
  }) => {
    const room = JSON.parse(args.room, reviver);
    console.log('messageSent', room.messages);
  });

  Socket.socket.on('roomDelete', (args: {}) => {
    console.log('roomdelete')
  });

  return null;
};

export default SocketEventsListener;