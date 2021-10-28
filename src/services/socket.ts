import io from "socket.io-client";



export class Socket {

  ENDPOINT = <string>process.env.REACT_APP_SOKET_END_POINT;
  socket = io(this.ENDPOINT, { transports: ['websocket', 'polling'] });


  leaveRoom(roomID: string){
    this.socket.emit('leavingRoom', { roomID }, (error: any) => {
      if (error) {
        console.log(error);
      }
    });
  }

  createRoom (roomName: string, user: any){
    this.socket.emit('createRoom', { roomName, user }, (error: any) => {
      if (error) {
        console.log(error);
      }
    });
  }

}