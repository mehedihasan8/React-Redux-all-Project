import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
    </>
  );
}

export default App;
