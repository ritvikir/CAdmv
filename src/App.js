import React from "react";
import Main from './Cards'
import {SignIn, SignOut} from "./SignIn"
import "./App.css";

import firebase from 'firebase/compat/app';
import {useAuthState} from 'react-firebase-hooks/auth'



const auth = firebase.auth();


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
