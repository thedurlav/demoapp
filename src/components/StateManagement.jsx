import { useState } from "react";

const StateManagement = () => {
    let [a,setA] = useState(10);
    /*usestate accepts init value and returns an array with val and function*/
    console.log("component rendered")
    return (  
        // console.log("component rendered")
        <div>
            <h1>State Management : {a}</h1>
            <button onClick={()=>{setA(a+0); console.log(a)}}>Increment A</button>
            <button onClick={()=>{setA(a-10); console.log(a)}}>Decrement A</button>
        </div>
    );
}
 
export default StateManagement;