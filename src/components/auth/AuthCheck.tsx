import React from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {setAuth, setUser} from "redux/userReducer";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const AuthCheck = () => {

  const history = useHistory();
  const dispatch = useDispatch();


  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user)
      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      }
      dispatch(setUser(userData));
      dispatch(setAuth(true));
      history.replace('/');
    } else {
      // User is signed out
      dispatch(setAuth(false));
      history.replace('/auth');
    }
  });
  return null;
};

export default AuthCheck;
