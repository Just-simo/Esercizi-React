import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0}) {
    const [counter, setCount] = useState(initialValue);

    function handleIncrementCounter() {
        setCount((c) => c + 1)
    }

    function handleDecrementCounter() {
        setCount((c) => c - 1)
    }

    function handleResetCounter() {
        setCount(initialValue)
    }
    return(
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={handleDecrementCounter}>Decrement</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    )
}