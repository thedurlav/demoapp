const EventHandling = () => {
    function x(){
        console.log("Non Parameterized function");
    }
    let y = (num)=>{
        console.log(num+" Parmeterized function");
    }
    return ( 
        <div>
            <h1>Event Handling in React</h1>
            <hr />
            {/*If a Function is with zero parameter then pass only function reference */}
            <button onClick={x}>invoke x</button>
            {/* If a function is with parameter, use callback function and invoke the same*/}
            <button onClick={()=>{
                y(10)
            }}>invoke y</button>
        </div>
     );
}
 
export default EventHandling;