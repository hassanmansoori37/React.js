import React from "react";
import Home from "./components/Home";
import Card1 from "./components/Card1";

// const App = () => {
//  const element = <h1>Hello Students</h1>;
//   return (
//     <>
//     <div>{element}</div>
//     </>
//   )
// };

// export default App;

// React.createElement('h1' , null, 'Hello');

// const App = () => {
//     let greet = React.createElement('h1' , null, 'Hello')

//     return (
//         <>
//         <div>{greet}</div>
//         </>
//     )
// }

// export default App;

const App = () => {
    return(
        <>
        <Home />
        <Card1 name= {'hassan'} para={'the world'}/>
        
        </>
    )
};

export default App;
