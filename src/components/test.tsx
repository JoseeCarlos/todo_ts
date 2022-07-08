import { useState } from "react";


export const Calculator = () => {
    const [result, setResult]= useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    
    const add = () => {
        setResult(num1 + num2);
    }
    
    const subtract = () => {
        setResult(num1 - num2);
    }
    
    const multiply = () => {
        setResult(num1 * num2);
    }
    
    const divide = () => {
        setResult(num1 / num2);
    }
    
    const clear = () => {
        setResult(0);
        setNum1(0);
        setNum2(0);
        
    }
    
    return (
        <div>
            <h1>Calculator</h1>
            <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <button onClick={clear }>Clear</button>
            <h1>{result}</h1>
        </div>
    );
    }


