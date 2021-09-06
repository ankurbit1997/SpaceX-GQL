import React, { useState } from "react";
import "./app.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>hello world {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
};

export default App;
