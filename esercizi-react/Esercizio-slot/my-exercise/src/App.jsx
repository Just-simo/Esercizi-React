import { useEffect } from "react";
import { useState } from "react";

export function App() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    console.log("Componente montato!");
    return () => {console.log("Componente smontato!")}
  }, []);

  useEffect(() => {console.log("Counter aggiornato!")}, [counter])

  function handleCounter() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>Ciao a tutti</h1>
      <p>The counter is: {counter}</p>
      <button onClick={handleCounter}>Click me</button>
    </div>
  );
}
