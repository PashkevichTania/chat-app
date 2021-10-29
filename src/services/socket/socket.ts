import io from "socket.io-client";
import {IMessage, IUser} from "interfaces";
import {toast} from "react-toastify";


export default class Socket {

  public static ENDPOINT = process.env.REACT_APP_SOKET_END_POINT as string;
  public static socket = io(this.ENDPOINT, { transports: ['websocket', 'polling'] });

  public static notify = (text: string) => toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  public static leaveRoom(){
    this.socket.emit('leavingRoom', { }, (error: any) => {
      if (error) {
        console.log(error);
        this.notify(JSON.stringify(error));
      }
    });
  }

  public static createRoom(roomName: string, user: IUser){
    this.socket.emit('createRoom', { roomName, user }, (error: any) => {
      if (error) {
        console.log(error);
        this.notify(JSON.stringify(error));
      }
    });
  }

  public static joinRoom(roomID: string, user: IUser){
    this.socket.emit('joinRoom', { roomID, user }, (error: any) => {
      if (error) {
        console.log(error);
        this.notify(JSON.stringify(error));
      }
    });
  }

  public static sendMessage(message: IMessage){
    this.socket.emit('sendMessage', { message }, (error: any) => {
      if (error) {
        console.log(error);
        this.notify(JSON.stringify(error));
      }
    });
  }

}