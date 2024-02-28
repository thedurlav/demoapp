import { useState,useEffect } from "react";
const DisplayRemoteData = () => {
    let [users , setUsers] = useState(null
        )
    useEffect (()=>{
        // setTimeout(() => {
        //     fetch("https://dummyjson.com/user")
        //     .then(res=>res.json())
        //     .then((data)=>{
        //         console.log(data.users.slice(0,12))
        //         setUsers(data.users.slice(0,12))
        //     })
        // }, 3000);
        setTimeout(()=>{
            fetchData()
        },3000)
    
    },[])
    async function fetchData(){
        try {
            let res = await fetch("https://dummyjson.com/user");
            let data = await res.json()
            console.log(data.users.slice(0,10))
            setUsers(data.users.slice(0,10))
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div>
            {
                users==null && <h1>Please Wait! Data is Loading </h1>
            }
            {   users!=null &&
                <div className="card-list">
            {
                users.map((v,i,a)=>{
                    return (<div key={v.id} className="card">
                        <h1>Username : {v.username}</h1>
                        <h2>Age : {v.age}</h2>
                        <h2>Phone : {v.phone}</h2>
                    </div>)
                })
            }
        </div>}

        </div>
     )
}
 
export default DisplayRemoteData;