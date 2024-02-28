import { useState } from "react";

const DisplayMultipleObjects = () => {
    let [users , setUsers] = useState(
        [
            {uname:"King" , id:1, age:32, phone:987445411},
            {uname:"Krish" , id:2, age:22, phone:987445412},
            {uname:"Riya" , id:3, age:45, phone:987445413},
            {uname:"Sita" , id:4, age:32, phone:987445414},
            {uname:"Hitesh" , id:5, age:32, phone:987445415},
            {uname:"Shiba" , id:6, age:32, phone:987445416}
        ]
        )
    return (
        <div className="card-list">
            {
                users.map((v,i,a)=>{
                    return (<div key={v.id} className="card">
                        <h1>Username : {v.uname}</h1>
                        <h2>Age : {v.age}</h2>
                        <h2>Phone : {v.phone}</h2>
                    </div>)
                })
            }
        </div>
      );
}
export default DisplayMultipleObjects;