import { useState } from "react";

const ConditionalRendering = () => {
    let [a , setA] = useState(10);
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <hr />
            <h2>A value is : {a}</h2>
            <button onClick={()=>{setA(a+1)}}>Increment</button>
            {a%2==0 ? <h2>A is Even</h2> : <h2>A is Odd</h2>}
            {a%5==0 && <h2>A is Divisible by 5</h2>}
        </div>

      );
}
 
export default ConditionalRendering;