import { useState } from "react";

const State = () => {
    let [count , setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);

    }

    let decrease = () => {
      count > 0 &&  setCount(count - 1)

    }

    let reset = () => {
        setCount(count = 0);
    }

    console.log('render');
    

    return(
        <div>
            <h2>Use State</h2>
            <h3>Counter App</h3>
            <p>{count}</p>
            <button onClick={increase} style={{backgroundColor: 'blue' ,
               borderRadius : 20 , padding: 5}}>Increase</button>
            <button onClick={decrease} style={{backgroundColor: 'yellow' ,
             borderRadius : 20 , padding : 5 }}>Decrease</button>
            <button onClick={reset} style={{backgroundColor : 'green' ,
              borderRadius : 20 , padding : 5}}>Reset</button>
        </div>

    )
}

export default State;