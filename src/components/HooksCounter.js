import React, { useState } from 'react'

const HooksCounter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div>
            <h2>Count: { count }</h2>
           <button onClick={() => setCount(initialCount)}>Reset</button>
           <button onClick={() => setCount(count + 1)}>Inc</button>
           <button onClick={() => setCount(count - 1)}>Dec</button>
           <button onClick={incrementFive}>Inc by 5</button>
        </div>
    )
}

export default HooksCounter;
