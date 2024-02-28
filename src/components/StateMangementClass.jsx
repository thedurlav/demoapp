import { Component } from "react"

class StateManagementClass extends Component{
    constructor(){
        super()
        this.state = {val1 : 10}
    }
    render(){
        console.log("component rendered")
        return (
            <div>
                <h1>State Management in class component</h1>
                <h1>Value 1 is : {this.state.val1}</h1>
                <hr />
                <button onClick={ ()=>{this.setState({val1: this.state.val1+10})}}> change v1</button>
            </div>
        )
    }
}
export default StateManagementClass;