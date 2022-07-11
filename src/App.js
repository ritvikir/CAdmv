import React from "react";
import Main from './Cards'
import {SignIn, SignOut} from "./SignIn"
import "./App.css";

import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollection} from 'react-firebase-hooks/firestore'



const auth = firebase.auth();
// const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <SignOut />
      {user ? <Main /> : <SignIn />}

    </div>
  );
}






export default App;
