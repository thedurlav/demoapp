import './App.css';
import Custom from './Custom';
import ConditionalRendering from './components/ConditonalRendering';
import EventHandling from './components/EventHandling';
import Fragments from './components/Fragments';
import Mode from './components/Mode';
import StateManagement from './components/StateManagement';
import StateManagementClass from './components/StateMangementClass';

function App() {
  // let num = 10;
  // let str = "hello"
  // let bool = true;
  // let x=undefined;
  // let arr = [10,20,30];
  // let n = null;
  // let m = NaN
  // let obj = {name:"Ravi",mark:45}
  return (
    <div className="App">
      <div className="fragment">
        <Mode/>
      </div>
    </div>
  );

}

export default App;
