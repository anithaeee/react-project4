import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';
import Props from './Props';
function App() {
  const [value,setvalue] = useState(0);
  let [val1, setval1] = useState(0);
  const [counterval, setcounterval] = useState(0);
  useEffect(()=>{
   console.log(value, "value");
   Updateval();
  },[value])
  const Updateval = () =>{
    setcounterval(counterval+1);
  }
  return (
    <div className="App">
      <Props count={counterval}/>
      <button onClick={()=>{setvalue(value+1)}}>Add</button>
      <button onClick={()=>{setval1(val1+1)}}>Add</button>
    </div>
  );
}

export default App;
