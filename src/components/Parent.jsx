import { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {
    let [a,setA] = useState(10)
    return (  
        <>
            <Child a = {a} b = {"hello"} />
        </>
    );
}
 
export default Parent;