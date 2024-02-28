import { useState } from "react";
const DisplayMultipleNums = () => {
    let [user,setUser] = useState(["alex" , "scott", "king" , "robert" , "adam"])
    return (  
        <div>
            {
                user.map((v,i,a)=>{
                    return (<h1 key={i}>{v}</h1>)
                })
            }
        </div>
    );
}
 
export default DisplayMultipleNums;