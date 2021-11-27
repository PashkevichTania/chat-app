// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {setAuth, setUser} from "redux/userReducer";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzjsSg_hnRJyyfeMD5S08BbE_yJteFsOQ",
  authDomain: "chat-app-a81c4.firebaseapp.com",
  projectId: "chat-app-a81c4",
  storageBucket: "chat-app-a81c4.appspot.com",
  messagingSenderId: "949361324150",
  appId: "1:949361324150:web:c9b9b37cd3e783b7f56f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth();

const error = (error: any)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error)
  toast.error(errorCode, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const useFirebase = () => {
  const dispatch = useDispatch();

  const setUserToStorage = () => {
    const user = auth.currentUser;
    const userData = {
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      uid: user?.uid,
    }
    dispatch(setUser(userData));
    dispatch(setAuth(true));
  };

  const firebaseSingUp = (firstName: string, lastName: string, email: string, password: string, file?: File) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if(file){
            const storageRef= ref(storage, `/users/avatars/${user.uid}/${file.name}`)
            uploadBytes(storageRef, file).then((snapshot) => {
              getDownloadURL(storageRef).then(imageUrl => {
                updateProfile(user, {
                  displayName: firstName + ' ' + lastName,
                  photoURL: imageUrl,
                }).then(() => {
                  setUserToStorage();
                })
              })
            })
          }else {
            const storageRef= ref(storage, '/users/defaultAvatar/ava.png')
            getDownloadURL(storageRef).then(imageUrl => {
              updateProfile(user, {
                displayName: firstName + ' ' + lastName,
                photoURL: imageUrl,
              }).then(() => {
                setUserToStorage();
              })
            })
          }
        }).catch(error);
  }

  const firebaseSingIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUserToStorage();
        })
        .catch(error);
  }

  const firebaseLogOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setAuth(false));
    }).catch(error);
  }

  return {firebaseSingIn, firebaseSingUp, firebaseLogOut};
}
