
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [element, setElement] = useState(false);
  // let element = "";
  function handleClick(){
    setElement(true);
    setTimeout(() => {
      setElement(false);
    }, 6000);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <button onClick={handleClick}>Show Modal</button>
        {element && <><h3>Modal Content</h3><p>This is the modal content.</p></>}
      </div>
    </div>
  )
}

export default App
