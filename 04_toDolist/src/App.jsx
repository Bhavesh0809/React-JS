import { useState } from "react";
import Navbar from "./components/navbar";


function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="bg-red-600">
          <h1>Your Todos</h1>
        </div>
      </div>
    </>
  );
}

export default App;
