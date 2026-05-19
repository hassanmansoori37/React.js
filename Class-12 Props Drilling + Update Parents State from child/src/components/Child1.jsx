import Child2 from "./Child2";

const Child1 = ({name , isLogin , setisLogin}) => {
    console.log('name' , name);
    console.log('isLogin child 1' , isLogin);

    if(isLogin === false){

    setisLogin(true)
    }
    

    return(
        <div>
            <h2>this is component child 1</h2>
            <Child2 name= {name} isLogin= {isLogin} />

        </div>
    )
}

export default Child1;