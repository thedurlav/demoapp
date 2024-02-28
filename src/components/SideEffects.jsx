import { useEffect, useState } from "react";

const SideEffects = () => {

    let [count , setCount] = useState(1);
    let [text, setText] = useState("page 1");

    useEffect(()=>{
        document.title = text;
        console.log("Text is changed")
    },[text])
    return ( <div>
            <h1>Side Effects in React</h1>
            <hr />
            <h1>Count 1 :{count}</h1>
            <hr />
            <button onClick={()=>{setCount(count+1)}}>change count</button>
            <button onClick={()=>{setText(text+1)}}> change title</button>
    </div>  );
}
 
export default SideEffects;