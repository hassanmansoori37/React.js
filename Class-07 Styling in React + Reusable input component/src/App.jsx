// import user from "./assets/data/userData";
// import Card1 from "./components/Card1";
// import Home from "./components/Home";

import CostumInput from "./components/shared/ConstumInput"

// const App = () => {
//   return (
//     <>
    
    
//     {/* <Home />
//     <div style={{backgroundColor: 'yellow' , display: 'flex' , 
//     flexDirection: 'column' , alignItems: 'center' }}>
//     {user.map((data, index) => {
//       return(
//         <div style={{marginTop: 20 , marginBottom: 20, border: 5, 
//         backgroundColor: 'red', display: 'flex' ,
//          justifyContent: 'center' , width: '40%' }}>
      
//       <Card1 name={data.name} age={data.age} 
//       profession={data.profession} experience={data.experience}
//        city={data.city}  imageUrl = {data.image} />

//        </div>
      
//       )
      

//     })}
//     </div>
    
    
//     </>*/}
    
    

    
    
//   )
// }

// export default App;

const App = () => {
  return(
    <>
    <CostumInput title={'Name'} containerStyle={{backgroundColor: 'blue'}}  />
    </>
  )
}

export default App;

