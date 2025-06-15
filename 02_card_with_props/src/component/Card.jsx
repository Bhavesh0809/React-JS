import React from "react";
import "../App.css";

// img inport

import viratImg from "../assets/Virat.jpg";
import Sachi from "../assets/sachi.jpg";
import rohit from "../assets/Sr.webp";
import pont from "../assets/ponting.jpg";
import jaya from "../assets/Jayasuriya.jpg";

const clients = [
  {
    id: "01",
    img: viratImg,
    name: "Player Name : Virat Kohli",
    odi: "ODI centuries : 51",
    sr: "SR : 93.34",
  },   
  {
    id: "02",
    img: Sachi,
    name: "Player Name : SR Tendulkar",
    odi: "ODI centuries : 49",
       sr: "SR : 86.23",
  },
  {
    id: "03",
    img: rohit,
    name: "Player Name : Rohit Sharma",
    odi: "ODI centuries : 32",
       sr: "SR : 92.80",
  },
  {
    id: "04",
    img: pont,
    name: "Player Name : Ricky Ponting",
    odi: "ODI centuries : 30",
       sr: "SR : 80.39",
  },
  {
    id: "05",
    img: jaya,
    name: "Player Name : ST jayasuriya",
    odi: "ODI centuries : 28",
       sr: "SR : 91.20",
  },
];
function Card() {
  return (
    <div className="card-container">
      {clients.map((client) => (
        <div className="card">
          <h1 className="card-id">{client.id}</h1>
          <div>
            <img className="card-img" src={client.img} alt={client.img} />
          </div>
          <div className="card-list">
            <h1 className="card-name">{client.name}</h1>
            <h1 className="card-odi">{client.odi}</h1>
            <h1 className="sr-rate">{client.sr}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
