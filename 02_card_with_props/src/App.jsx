import React from "react";
import Card from "./component/Card.jsx";
import { BiSolidCricketBall } from "react-icons/bi";

function App() {
  return (
    <div>
      <h2 className="d-flex">
        Top 5 batsmen who have most ODI centuries
        <BiSolidCricketBall className="ball" />
      </h2>
      <Card />
    </div>
  );
}

export default App;