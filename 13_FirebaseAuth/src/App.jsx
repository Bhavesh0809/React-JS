import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from './firebase';
import SignupPage from './pages/Signup';
import './App.css'

const auth = getAuth(app);

function App() {

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "bhaveshvadhvana0@gmail.com",
      "Plz@NotOkay"
    ).then(value => console.log(value));
  };


  return (
    <>
      <div className="App">
       <SignupPage />
      </div> 
    </>
  )
}

export default App
