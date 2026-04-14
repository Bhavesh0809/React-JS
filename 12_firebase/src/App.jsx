import "./App.css";
import { getDatabase, set, ref } from "firebase/database";
import app from "../src/Config.js/firebase"; // Fixed the path here

function App() { 
  const db = getDatabase(app);

  const writeToDatabase = () => {
    set(ref(db, "users/1"), {
      username: "Bhavesh",
      email: "bhaveshvadhvana04@gmail.com"
    })
    .then(() => {
      alert("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error writing to database:", error);
      alert("Error: " + error.message);
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Firebase Realtime Database</h1>
      <button onClick={writeToDatabase}>Write to Database</button>
    </div>
  );
}

export default App;