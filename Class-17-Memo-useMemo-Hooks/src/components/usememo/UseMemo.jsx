import { useMemo, useState } from "react";


const UseMemo = () => {
    
    const [counter , setCounter] = useState(0)
    const [userAge , setuserAge] = useState(19)

    const heavyCalculation = () => {
        console.log("calcultion running");
        
        return "calculation done"
    }

    const heavyResult = useMemo(() => {
       return heavyCalculation()
        
    }, [userAge])
    console.log(heavyResult);
    


    return(
        <div>UseMemoHook

            <br />
            {userAge}
            
            <br />
            <button onClick={() => setuserAge(userAge + 2)}>Add</button>
            <br />

       <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <b>{counter}</b>
        <button onClick={() => setCounter( counter - 1  )}>Decrease</button>
        </div>
       
    )
}

export default UseMemo;