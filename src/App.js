import React from 'react';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  let [value,setvalue] = useState(0);
  useEffect(()=>{
   console.log(value, "value");
  })
  return (
    <div className="App">
      <h1>count value {value}</h1>
      <button onClick={setvalue(value+1)}>Add</button>
    </div>
  );
}

export default App;
