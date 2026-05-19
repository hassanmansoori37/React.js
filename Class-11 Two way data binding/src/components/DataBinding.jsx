import { useState } from "react";

const DataBinding = () => {
    let [name , setName] = useState('');
    let [email , setEmail] = useState('');

    console.log('name' , name);
    console.log('email' , email);
    console.log('render');

    let obj = {
        name: name,
        email: email,
    }

    console.log('obj' , obj);
    
    
    
    
    return(
        <div>
            <h3>Two way data binding</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>Submit</button>

        </div>
    )
}

export default DataBinding;