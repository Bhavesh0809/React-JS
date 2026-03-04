import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increament = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>COUNTER APP</h1>
      <h2>{count}</h2>

      <div className="button-group">
        <button onClick={decreament}>- Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increament}>+ Increase</button>
      </div>
    </div>
  );
}

export default App;
