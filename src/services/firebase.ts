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

const firebaseSingUp = (firstName: string, lastName: string, email: string, password: string, file?: File) => {
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(file){
          const storageRef= ref(storage, `/users/${user.uid}/${file.name}`)
          uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(storageRef).then(imageUrl => {
              updateProfile(user, {
                displayName: firstName + ' ' + lastName,
                photoURL: imageUrl,
              }).then(() => {
                console.log('auth.currentUser', auth.currentUser);
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
              console.log(auth.currentUser);
            })
          })
        }
      }).catch(error);
}

const firebaseSingIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error);
}

const firebaseLogOut = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch(error);
}

export {firebaseSingIn, firebaseSingUp, firebaseLogOut}
