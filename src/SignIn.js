import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollection} from 'react-firebase-hooks/firestore'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaGoogle } from 'react-icons/fa';

import { getAuth } from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBTeoazV1qHL0WhdeI5csJlzHdV4mUXlf4",
  authDomain: "dmvapp-c14da.firebaseapp.com",
  projectId: "dmvapp-c14da",
  storageBucket: "dmvapp-c14da.appspot.com",
  messagingSenderId: "513209905685",
  appId: "1:513209905685:web:0f6afab96c20e13098d41c"
})
const auth = firebase.auth();
const firestore = firebase.firestore();



export function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (

    <div className="relative bg-white overflow-hidden h-screen	">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
          


          <main className="mt-10 mx-auto max-w-7xl lg:pt-40 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">DMV Quiz</span>{' '}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
Prepare for the permit test with this tool!              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    onClick={signInWithGoogle}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                  <FaGoogle className="mr-2 " />
                    Sign in with Google
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/fl51101883817-image-ku7z9xnr.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=832a0e1acf761983e224609c582e7ed3"
          alt=""
        />
      </div>
    </div>
  )
  
}


export function SignOut() {

    return auth.currentUser && (
    <div>
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        {auth.currentUser.displayName}
    </div>
    )
}