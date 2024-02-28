import './App.css';
import Custom from './Custom';
import ConditionalRendering from './components/ConditonalRendering';
import DisplayMultipleNums from './components/DisplayMultipleNums';
import DisplayMultipleObjects from './components/DisplayMultipleObject';
import DisplayRemoteData from './components/DisplayRemoteData';
// import DisplayMultipleData from './components/DisplayMultipleData';
import EventHandling from './components/EventHandling';
import Fragments from './components/Fragments';
import Mode from './components/Mode';
import Parent from './components/Parent';
import SideEffects from './components/SideEffects';
import StateManagement from './components/StateManagement';
import StateManagementClass from './components/StateMangementClass';
import Electronics from './routing/Electronics';
import Fashion from './routing/Fashion';
import Home from './routing/Home';
import Navbar from './routing/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
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
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/fashion' element={<Fashion/>}/>
            <Route path='/elec' element={<Electronics/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );

}

export default App;
