
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter App: {count}</h1>

            <button onClick={() => setCount(count + 1)} className="btn1">+</button>

            <button onClick={() => setCount(count - 1)} className="btn2">-</button>

            <button onClick={() => setCount(0)} className="btn3">Reset</button>
        </div>
    ); 
}

export default Counter;