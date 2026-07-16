import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
    console.log("parent rendered");

    const [count , setCount] = useState(0)

    const handleClick = useCallback( () => {
        console.log("click is running");
        
    } , [])

    
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
             <button onClick={() => setCount(count - 1)}>Decrease</button>
             <h3>UseCallback : {count}</h3>

             <ChildComponent handleClick={handleClick} />

        </div>
    )
}

export default UseCallback;