import { useState } from "react";
import Child1 from "./Child1";

const Parent = () => {
    let [name , setName] = useState('Saylani')
    let [isLogin , setisLogin] = useState(false)  
    
    return(
        <div>
            <Child1 name= {name} isLogin= {isLogin} setisLogin= {setisLogin} />

        </div>
    )
}

export default Parent;