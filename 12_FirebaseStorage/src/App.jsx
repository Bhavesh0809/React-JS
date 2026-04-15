import { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './firebase'
import './App.css'

const database = getDatabase(app)

function App() {

  const putData = () => {
    set(ref(database, 'users/Bhavesh'), {
      id: 1,
      name: "Bhavesh",
      email: "bhaveshvadhvana04.com"
    });
    set(ref(database, 'users/Dhaval'), {
      id: 2,
      name: "Dhaval",
      email: "dhaval@example.com"
    });
  };

  return (
    <>
      <div className="App">
        <h1>Welcome to Bhavesh's Firebase App</h1>
        <button onClick={putData}>Put Data</button>
      </div>
    </>
  )
}

export default App
