import { useState } from "react";


function InputExample() {

    const [inputValue, setinputValue] = useState("");

    return (
        <>
            <input
            className="inn"
            type="text" 
            value={inputValue}
            placeholder="Enter your name"
            onChange={(event) => setinputValue(event.target.value)}
            />
            <h1>Your Name: {inputValue}</h1>
        </>
    );
}

export default InputExample; 