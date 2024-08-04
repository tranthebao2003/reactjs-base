import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1)
  const handleIncrease = () =>{
    setCounter(counter + 1)
  }
  return (
    <div className="App" style={{margin: 100}}>
      <h1 style={{fontSize: 100}}>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
