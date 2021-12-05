// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  updateEmail,
  updatePassword,
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
// const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth();

const showErrorMessage = (error: any) => {
  const errorCode = error.code;
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

const showSuccessMessage = (msg: string) => {
  toast.success(msg, {
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
          if (file) {
            const storageRef = ref(storage, `/users/avatars/${user.uid}/${file.name}`)
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
          } else {
            const storageRef = ref(storage, '/users/defaultAvatar/ava.png')
            getDownloadURL(storageRef).then(imageUrl => {
              updateProfile(user, {
                displayName: firstName + ' ' + lastName,
                photoURL: imageUrl,
              }).then(() => {
                setUserToStorage();
              })
            })
          }
        }).catch(showErrorMessage);
  }

  const firebaseSingIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUserToStorage();
        })
        .catch(showErrorMessage);
  }

  const firebaseLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setAuth(false));
    }).catch(showErrorMessage);
  }


  const firebaseUpdateName = async (name: string) => {
    const user = auth.currentUser;
    try {
      if (user) {
        await updateProfile(user, {displayName: name});
        setUserToStorage();
      }
    } catch (e) {
      showErrorMessage(e);
    }
  }

  const firebaseUpdateEmailAndPassword = (newEmail: string, password: string, newPassword: string) => {
    const user = auth.currentUser;
    if (user) {
      signInWithEmailAndPassword(auth, user.email as string, password)
          .then((userCredentials) => {
            updateEmail(userCredentials.user, newEmail).then(() => {
              if (user.email !== newEmail){
                showSuccessMessage('Email changed!');
                setUserToStorage();
              }
            }).then(() => {
              if (newPassword.trim()) {
                const user = auth.currentUser;
                console.log(newPassword, user)
                if (user) {
                  updatePassword(user, newPassword.trim()).then(() => {
                    showSuccessMessage('Password changed!');
                  });
                }
              }
            })
          })
          .catch(showErrorMessage);
    }
  }

  const firebaseUpdateAvatar = (ava: File) => {
    const user = auth.currentUser;
    try {
      if (ava && user) {
        const storageRef = ref(storage, `/users/avatars/${user.uid}/${ava.name}`)
        uploadBytes(storageRef, ava).then((snapshot) => {
          getDownloadURL(storageRef).then(imageUrl => {
            updateProfile(user, {
              photoURL: imageUrl,
            }).then(() => {
              setUserToStorage();
            })
          })
        })
      }
    } catch (e) {
      showErrorMessage(e);
    }
  }


  return {
    firebaseSingIn,
    firebaseSingUp,
    firebaseLogOut,
    firebaseUpdateName,
    firebaseUpdateEmailAndPassword,
    firebaseUpdateAvatar
  };
}
